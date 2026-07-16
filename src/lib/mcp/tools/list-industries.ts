import { defineTool } from "@lovable.dev/mcp-js";

const industries = [
  "Automotive",
  "Electrical & Electronics",
  "Home Appliances",
  "Industrial Equipment",
  "Export Components",
];

export default defineTool({
  name: "list_industries",
  title: "List industries served",
  description: "List the industries Venus Group supplies precision engineered components to.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(industries, null, 2) }],
    structuredContent: { industries },
  }),
});
