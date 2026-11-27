import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { saveSubmission } from '../lib/store.js';
import { news } from '../data/news.js';
import { getLatestNews } from '../lib/news-feed.js';
const router = Router();
const formLimiter = rateLimit({ windowMs: 60 * 60 * 1000, limit: 10, message: { error: 'Too many submissions. Please try again later.' } });
const clean = (v, max) => String(v ?? '').trim().slice(0, max);
const emailOk = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
function formHandler(kind, { requireConsent }) {
  return async (req, res, next) => {
    try {
      const b = req.body || {};
      if (b.website) return res.status(201).json({ ok: true });
      const d = { name: clean(b.name, 100), email: clean(b.email, 150), type: clean(b.type, 80), date: clean(b.date, 20), message: clean(b.message, 3000) };
      const errors = {};
      if (d.name.length < 2) errors.name = 'Please enter your name.';
      if (!emailOk(d.email)) errors.email = 'Please enter a valid email.';
      if (d.message.length < 10) errors.message = 'Please add a little more detail.';
      if (requireConsent && b.consent !== true) errors.consent = 'Please confirm to continue.';
      if (Object.keys(errors).length) return res.status(400).json({ error: 'Please correct the highlighted fields.', errors });
      const id = await saveSubmission({ kind, ...d });
      res.status(201).json({ ok: true, id });
    } catch (err) { next(err); }
  };
}
router.get('/health', (req, res) => res.json({ ok: true }));
router.get('/news', async (req, res, next) => {
  try {
    const latest = await getLatestNews();
    res.json({ europe: news.europe, us: latest.items, lastUpdated: latest.lastUpdated });
  } catch (error) { next(error); }
});
router.post('/contact', formLimiter, formHandler('contact', { requireConsent: false }));
router.post('/complaints', formLimiter, formHandler('complaint', { requireConsent: true }));
export default router;
