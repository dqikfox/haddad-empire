---
description: "Use when editing workspace Copilot customizations such as AGENTS.md, instructions, prompts, skills, hooks, custom agents, or MCP-related files. Keeps customizations discoverable, single-purpose, and indexed around likely user phrases like skills, MCP, broken skill, server connection, Copilot CLI, and init."
---

- Prefer the smallest viable customization primitive:
  - `AGENTS.md` for always-on repository guidance
  - `*.instructions.md` for file-scoped rules
  - prompts for one-shot tasks
  - skills for repeatable multi-step workflows
  - custom agents for isolated delegated work
  - hooks for deterministic enforcement
- The `description` field is the main discovery surface. Start with `Use when...` and include concrete trigger phrases users will actually type.
- Avoid near-duplicate descriptions across skills, prompts, and agents. If two customizations would trigger on the same wording, separate them by scope or merge them.
- Link to `README.md` for site and deployment context instead of copying those details into customization files.
- This repository is a static website, so do not assume Node.js, Next.js, Vite, or backend tooling unless the user explicitly adds them.
