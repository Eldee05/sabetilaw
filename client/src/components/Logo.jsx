// Scales-and-pen emblem (gold, from the brand board)
export default function Logo({ size = 34, stroke = 3, label }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="#bba478"
      strokeWidth={stroke} strokeLinecap="round"
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
    >
      <path d="M32 6v46M10 18c8-3 14 2 22-2 8 4 14-1 22 2" />
      <path d="M14 22l-8 18h16zM50 22l-8 18h16z" />
      <path d="M6 40c3 6 13 6 16 0M42 40c3 6 13 6 16 0" />
      <path d="M24 56h16" />
    </svg>
  );
}
