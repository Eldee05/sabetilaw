// Placeholder portrait. To use a real photo, replace <Avatar /> with
// <img src="/team/your-photo.jpg" alt="Full Name, Title" /> (files go in client/public/team/).
export default function Avatar() {
  return (
    <svg viewBox="0 0 200 240" role="img" aria-label="Portrait placeholder">
      <circle cx="100" cy="90" r="42" fill="#bba478" opacity=".8" />
      <path d="M20 240c0-60 35-92 80-92s80 32 80 92z" fill="#bba478" opacity=".8" />
    </svg>
  );
}
