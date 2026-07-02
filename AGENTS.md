# AGENTS.md

## Repository at a glance

- This repository is a static website: the production site is driven by `index.html` and `assets/`.
- There is no package manager, build pipeline, server, or test suite in the current workspace.
- `legacy-backup/` is reference material from an older version of the site, not the active implementation.

## Working norms for AI agents

- Prefer small, direct edits to `index.html` and existing assets over introducing frameworks, bundlers, or generated files.
- Keep the site deployable to GoDaddy shared hosting by preserving a plain static output.
- Treat `README.md` as the source for deployment notes; link to it instead of duplicating hosting instructions elsewhere.
- If a change touches visuals or copy, assume the root page is the source of truth unless the user explicitly asks to revive content from `legacy-backup/`.

## Validation expectations

- Since there is no build or test command, validate static-site changes by checking HTML structure, asset paths, and whether the page can be opened directly from the workspace.

## Copilot customization guidance for this repo

- Use this `AGENTS.md` file for always-on repository guidance.
- When creating workspace customizations under `.github/`, keep each file single-purpose and avoid overlapping descriptions.
- For discoverability, descriptions should start with `Use when...` and include the exact phrases a user is likely to type.
- If a customization is about Copilot CLI setup or recovery, include keywords such as `skills`, `MCP`, `broken skill`, `server connection`, `Copilot CLI`, and `init` in the description when they are relevant.
- Put repeatable multi-step workflows in skills, narrow file-scoped behavior in `*.instructions.md`, and external system integration in MCP configuration rather than mixing those concerns.
