export function refineLink(link: string) {
  if (!link) return "/";

  if (link.includes("://") || link.includes(".")) return link;

  return /^\//.test(link) ? link : `/${link}`;
}
