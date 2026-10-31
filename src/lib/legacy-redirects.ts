// Exact legacy page paths only. Never redirect unrelated URLs to the homepage.
export const legacyRedirects: Readonly<Record<string, string>> = {
  "/injection-moulds-pdc-dies": "/capabilities",
  "/high-precision-progressive-tools-manufacturing-with-assemblies": "/capabilities",
  "/aluminium-zink-pdc-gdc-component-production": "/capabilities",
  "/electrical-lamination-stamping-dies-manufacturing-with-assemblies-production": "/capabilities",
  "/commercial-design-center": "/capabilities",
  "/venus-services": "/infrastructure",
  "/tool-room-machinery-facilities": "/infrastructure",
  "/production-facility": "/infrastructure",
  "/quality": "/about",
  "/contact-us": "/contact",
};

export function legacyRedirectResponse(request: Request): Response | undefined {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, "");
  const destination = legacyRedirects[path];
  if (!destination) return;

  // Same-origin Location works on preview and the canonical production host.
  // Retain incoming query parameters, including legitimate campaign attribution.
  return new Response(null, {
    status: 301,
    headers: { Location: `${destination}${url.search}` },
  });
}