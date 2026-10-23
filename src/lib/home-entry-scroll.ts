/** History traversal must retain its saved position, unlike a fresh home entry. */
export function shouldResetHomeEntry(pathname: string, hash: string, navigationType?: string) {
  return pathname === "/" && hash === "" && navigationType !== "back_forward";
}
