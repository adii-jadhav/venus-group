import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyOverview from "./tools/get-company-overview";
import listCapabilities from "./tools/list-capabilities";
import getContactInfo from "./tools/get-contact-info";
import listIndustries from "./tools/list-industries";

export default defineMcp({
  name: "venus-group-mcp",
  title: "Venus Group MCP",
  version: "0.1.0",
  instructions:
    "Public information about Venus Group, a Pune-based precision engineering manufacturer. Use these tools to answer questions about the company's capabilities, industries served, certifications, and contact information.",
  tools: [getCompanyOverview, listCapabilities, listIndustries, getContactInfo],
});
