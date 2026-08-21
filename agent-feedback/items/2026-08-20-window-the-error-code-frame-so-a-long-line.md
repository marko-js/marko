---
type: cleanup
impact: low
effort: low
site: packages/compiler/src/util/build-code-frame.js › buildMessage
---

# Window the error code frame so a long line cannot produce a 400 kB message

`buildMessage` hands the whole line to `codeFrameColumns` with no column window, so the message grows with the source: the frame prints the offending line once as source and once as a run of carets. A 200,007-byte template (a single 100k-character tag name) produces a `CompileError` whose `message.length` is 400,251, and 500 nested parens inside an interpolation turn 1 kB of source into a 2.2 kB message whose only prose sits past column 500 where no terminal shows it. Long single lines are not exotic — an inlined data URI or generated markup gets there. Truncate the framed line around `loc.start.column` with an ellipsis before framing, the way Babel, rustc and tsc all window.

Check: compile a template whose tag name is 100k characters and read `e.message.length` — 400,251 today; expect a few kB regardless of source size, with the label still visible.
