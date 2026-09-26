---
type: dx
impact: low
effort: low
site: scripts/inspect-compiled-output.mts
---

# Let `pnpm run compile` write its output away from the input

The script writes `<input>.js`, and each virtual dependency, beside the template it compiles, so inspecting what the translator emits for a template in a consuming app (the usual first step when a bug report names one) writes generated files into that app's checkout; the workaround is cloning the app first. An `--out-dir` option, or printing to stdout for a single input, would keep inspection read-only.

Check: `pnpm run compile -- -o html -d /path/to/app/src/tags/x.marko` creates `/path/to/app/src/tags/x.marko.js`.
