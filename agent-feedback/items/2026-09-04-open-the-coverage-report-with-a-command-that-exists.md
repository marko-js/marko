---
type: dx
impact: low
effort: low
site: package.json › scripts.report
---

# Open the coverage report with a command that exists on Linux

`"report": "zcov report -r html && open ./coverage/index.html"` ends in `open`, which is macOS-only. On Linux the HTML report is generated correctly and the script then fails with `sh: line 1: open: command not found` and a non-zero exit, which reads as though the report itself failed — and `.github/CONTRIBUTING.md` tells every contributor to run this command after `pnpm run @ci:test`. Print the path instead of launching a browser, or choose the opener per platform (`xdg-open` is present here).

Check: `pnpm run @ci:test && pnpm run report` on Linux writes `coverage/index.html` and then exits non-zero with `sh: line 1: open: command not found`.
