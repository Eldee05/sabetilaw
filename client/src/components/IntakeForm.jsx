import { useState } from 'react';
import { postForm } from '../api';

// Shared form for the case-review and complaint sections.
export default function IntakeForm({ endpoint, types, withDate = false, consentText, submitLabel, successText }) {
  const [state, setState] = useState('idle'); // idle | sending | done | error
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (consentText) data.consent = form.elements.consent.checked;
    setState('sending'); setErrors({}); setMessage('');
    try {
      await postForm(endpoint, data);
      setState('done');
    } catch (err) {
      setErrors(err.errors || {});
      setMessage(err.message);
      setState('error');
    }
  }

  if (state === 'done') return <p className="ok">{successText}</p>;
  const err = (k) => errors[k] && <small className="err">{errors[k]}</small>;

  return (
    <form onSubmit={onSubmit} noValidate>
      <input name="name" placeholder="Full name" aria-label="Full name" required />{err('name')}
      <input name="email" type="email" placeholder="Email address" aria-label="Email" required />{err('email')}
      <select name="type" aria-label="Type">{types.map((t) => <option key={t}>{t}</option>)}</select>
      {withDate && <input name="date" type="date" aria-label="Date of incident" />}
      <textarea name="message" rows="5" placeholder="Describe what happened" aria-label="Description" required />{err('message')}
      {consentText && (
        <label className="consent">
          <input name="consent" type="checkbox" />{consentText}
        </label>
      )}
      {err('consent')}
      <input name="website" className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <button className="btn" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : submitLabel}
      </button>
      {message && <small className="err">{message}</small>}
    </form>
  );
}
