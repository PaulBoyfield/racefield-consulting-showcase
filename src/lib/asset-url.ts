// Resolve a Lovable asset pointer's URL to an absolute origin so it works on
// any host (Netlify, custom domains, etc.) without relying on a proxy rewrite.
const ORIGIN = "https://project--b845fc43-5590-40e0-a59e-cf829ae24a5e.lovable.app";

export function assetUrl(pointer: { url: string }): string {
  const u = pointer.url;
  if (/^https?:\/\//i.test(u)) return u;
  return `${ORIGIN}${u.startsWith("/") ? "" : "/"}${u}`;
}
