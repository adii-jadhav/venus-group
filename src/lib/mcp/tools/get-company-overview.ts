import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_company_overview",
  title: "Get company overview",
  description:
    "Return an overview of Venus Group, a Pune-based precision engineering manufacturer of plastic injection moulds, HPDC dies, and progressive & stamping tools. Includes certifications, headquarters, and years of experience.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const overview = {
      name: "Venus Group",
      tagline: "All Under One Roof",
      headquarters: "Pune, Maharashtra, India",
      experience_years: 26,
      description:
        "Venus Group is a Pune-headquartered precision engineering manufacturer with 26+ years of expertise across plastic injection moulds, high pressure die casting (HPDC) dies, and progressive & stamping tools. We serve Indian and export customers with end-to-end engineering, from design and tooling through component production and sub-assembly.",
      certifications: ["ISO 9001:2015", "IATF 16949:2016"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(overview, null, 2) }],
      structuredContent: overview,
    };
  },
});
