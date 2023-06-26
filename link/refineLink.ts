export function refineLink(link: string) {
  if (!link) return "/";

  if (link.includes("://") || link.includes("."))
    return link.includes("://") ? link : "https://" + link;

  return /^\//.test(link) ? link : `/${link}`;
}
