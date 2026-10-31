import logo from "@/assets/venus-logo.png";

export const canonicalHost = "https://www.venusgroup.co.in";
export const publicPagePaths = ["/", "/about", "/capabilities", "/infrastructure", "/industries", "/contact"] as const;

export function pageHead(path: string, title: string, description: string, image = logo) {
  const url = new URL(path, canonicalHost).href;
  const imageUrl = new URL(image, canonicalHost).href;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${canonicalHost}/#organization`,
  name: "Venus Group",
  alternateName: "Venus Dies & Moulds Pvt Ltd",
  url: canonicalHost,
  foundingDate: "1999",
  logo: new URL(logo, canonicalHost).href,
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-2 Block 66/12, MIDC Chinchwad",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411019",
    addressCountry: "IN",
  },
  contactPoint: [
    { "@type": "ContactPoint", contactType: "Business enquiries", telephone: "+91 90490 01430", email: "msnayak@venusgroup.co.in" },
    { "@type": "ContactPoint", contactType: "Business enquiries", telephone: "+91 88306 03858", email: "sathvik@venusgroup.co.in" },
  ],
  knowsAbout: ["Plastic injection moulds", "High pressure die casting", "Progressive and stamping tools", "Sheet metal components", "CNC wire cutting", "Laser cutting"],
};