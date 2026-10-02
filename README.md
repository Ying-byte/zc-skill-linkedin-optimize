# LinkedIn 优化建议

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

只给主页文案建议，禁止代发或改用户主页。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-linkedin-optimize
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-linkedin-optimize": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-linkedin-optimize/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `optimize_linkedin` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-linkedin-optimize/SKILL.md`.

## License

MIT — see `LICENSE`.
