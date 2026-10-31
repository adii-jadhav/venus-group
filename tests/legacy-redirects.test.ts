import { expect, test } from "bun:test";
import { legacyRedirectResponse } from "../src/lib/legacy-redirects";

const requiredMappings = [
  ["/injection-moulds-pdc-dies", "/capabilities"],
  ["/high-precision-progressive-tools-manufacturing-with-assemblies", "/capabilities"],
  ["/aluminium-zink-pdc-gdc-component-production", "/capabilities"],
  ["/electrical-lamination-stamping-dies-manufacturing-with-assemblies-production", "/capabilities"],
  ["/commercial-design-center", "/capabilities"],
  ["/venus-services", "/infrastructure"],
  ["/tool-room-machinery-facilities", "/infrastructure"],
  ["/production-facility", "/infrastructure"],
  ["/quality", "/about"],
  ["/contact-us", "/contact"],
] as const;

for (const [oldPath, destination] of requiredMappings) {
  test(`${oldPath} permanently redirects to ${destination} in both slash forms`, () => {
    for (const suffix of ["", "/"]) {
      const response = legacyRedirectResponse(new Request(`https://www.venusgroup.co.in${oldPath}${suffix}`));
      expect(response?.status).toBe(301);
      expect(response?.headers.get("Location")).toBe(destination);
    }
  });
}

test("unrelated pages and current destinations are not redirected", () => {
  for (const path of ["/", "/about", "/capabilities", "/infrastructure", "/contact", "/missing-page", "/quality/child"]) {
    expect(legacyRedirectResponse(new Request(`https://www.venusgroup.co.in${path}`))).toBeUndefined();
  }
});

test("legacy query parameters survive the redirect", () => {
  const response = legacyRedirectResponse(new Request("https://www.venusgroup.co.in/contact-us/?utm_source=legacy"));
  expect(response?.headers.get("Location")).toBe("/contact?utm_source=legacy");
});