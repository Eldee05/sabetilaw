// In dev, Vite proxies /api to Express. For a separately hosted API, set VITE_API_URL.
const BASE = import.meta.env.VITE_API_URL || "/api";

export async function getNews() {
  const res = await fetch(`${BASE}/news`);
  if (!res.ok) throw new Error("Could not load news");
  return res.json();
}

export async function postForm(path, data) {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw Object.assign(new Error(body.error || "Request failed"), {
      errors: body.errors || {},
    });
  }
  return body;
}
