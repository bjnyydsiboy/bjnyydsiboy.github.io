const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

/** Prefix local URLs for GitHub project pages without changing anchors or external links. */
export function sitePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const normalized = /^\/work\/[^/#?]+$/.test(path) ? `${path}/` : path;
  return `${basePath}${normalized}`;
}
