import { defineTool } from "@lovable.dev/mcp-js";

const capabilities = [
  {
    id: "plastic-injection-moulds",
    title: "Plastic Injection Moulds and Components",
    description:
      "Design and manufacture of plastic injection moulds and production of plastic components for automotive, electrical, and industrial applications.",
  },
  {
    id: "hpdc-dies",
    title: "HPDC Dies and Components",
    description:
      "Aluminum and Zinc pressure die casting components — cold chamber and hot chamber — produced at our 100,000+ sq. ft. facility in Chakan.",
  },
  {
    id: "progressive-stamping-tools",
    title: "Progressive & Stamping Tools and Components",
    description:
      "Progressive and stamping tools plus sheet metal components; stamping development and sub-assembly (plastic, sheet metal, aluminum) under one roof.",
  },
  {
    id: "sheet-metal-components",
    title: "Sheet Metal Components",
    description: "Sheet metal component manufacturing integrated with our tool room capability.",
  },
];

export default defineTool({
  name: "list_capabilities",
  title: "List capabilities",
  description:
    "List the manufacturing capabilities offered by Venus Group: plastic injection moulds, HPDC dies, progressive & stamping tools, and sheet metal components.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(capabilities, null, 2) }],
    structuredContent: { capabilities },
  }),
});
