---
name: zc-skill-linkedin-optimize
description: >-
  只给主页文案建议，禁止代发或改用户主页。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-linkedin-optimize.
---

# LinkedIn 优化建议 · Skill

## When to use

- User asks for: LinkedIn 优化建议
- 只给主页文案建议，禁止代发或改用户主页。

## Tools (`zc-skill-linkedin-optimize`)

| Tool | Args |
|------|------|
| `optimize_linkedin` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
