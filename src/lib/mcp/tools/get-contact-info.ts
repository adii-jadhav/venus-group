import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  address: "D-2 Block 66/12, MIDC Chinchwad, Pune – 411019, India",
  phones: ["+91 90490 01430", "+91 88306 03858"],
  emails: ["msnayak@venusgroup.co.in", "sathvik@venusgroup.co.in"],
  website: "https://venusgroup.co.in",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact information",
  description:
    "Return Venus Group's public contact information: address, phone numbers, and email addresses for sales and general enquiries.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
