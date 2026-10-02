#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "linkedin-optimize",
  "titleZh": "LinkedIn 优化建议",
  "summary": "只给主页文案建议，禁止代发或改用户主页。",
  "tools": [
    "optimize_linkedin"
  ],
  "proxyTools": {
    "optimize_linkedin": "zc_assets_draft_resume"
  },
  "localKind": "draft"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
