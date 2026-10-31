import { createMiddleware, createStart } from "@tanstack/react-start";
import { legacyRedirectResponse } from "@/lib/legacy-redirects";

const legacyPageRedirects = createMiddleware().server(({ request, next }) => {
  const response = legacyRedirectResponse(request);
  return response ?? next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [legacyPageRedirects],
}));
