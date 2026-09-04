---
type: dx
impact: low
effort: low
site: agent-feedback/README.md › Repo notes
---

# List every agent env marker in the repo notes

The Gotchas name `MARKO_AGENT_FIX_GUIDE`/`CLAUDECODE` as the environment that leaks `Fix guide: READ ...` lines into error snapshots, but `packages/compiler/src/util/agent-fix-guide.js` also sniffs `CLAUDE_CODE`, `CURSOR_AGENT`, `GEMINI_CLI`, `CODEX_SANDBOX`, `CODEX_THREAD_ID` and `AI_AGENT`. An agent that follows the note, unsets the two listed variables and still sees the suffix concludes the note is wrong and spends time re-deriving the list from source. Say instead that `MARKO_AGENT_FIX_GUIDE=0` is the single reliable override, since the file treats that variable as an explicit override ahead of every marker it sniffs.

Check: `grep -n 'process.env' packages/compiler/src/util/agent-fix-guide.js` lists seven markers; the Gotchas note names two of them.
