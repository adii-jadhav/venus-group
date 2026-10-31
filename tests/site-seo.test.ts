import { describe, expect, test } from "bun:test";
import { canonicalHost, organization, publicPagePaths } from "../src/lib/site-seo";

describe("verified public company facts", () => {
  test("uses the owner's canonical host for all six public pages", () => {
    expect(canonicalHost).toBe("https://www.venusgroup.co.in");
    expect(publicPagePaths).toEqual([
      "/",
      "/about",
      "/capabilities",
      "/infrastructure",
      "/industries",
      "/contact",
    ]);
  });
  test("keeps the verified founding year", () => {
    expect(organization.foundingDate).toBe("1999");
  });
  test("keeps the verified Chinchwad address", () => {
    expect(organization.address.streetAddress).toBe("D-2 Block 66/12, MIDC Chinchwad");
    expect(organization.address.postalCode).toBe("411019");
  });
  test("keeps both published contact points", () => {
    expect(organization.contactPoint.map(({ telephone, email }) => [telephone, email])).toEqual([
      ["+91 90490 01430", "msnayak@venusgroup.co.in"],
      ["+91 88306 03858", "sathvik@venusgroup.co.in"],
    ]);
  });
});
