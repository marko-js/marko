---
"@marko/runtime-tags": patch
---

Stop a formatting-only newline in a `<textarea>` body from being treated as content. `<textarea>` preserves whitespace, so a natural multi-line `<textarea value=v>` with `</textarea>` on the next line — whose body is just a newline — threw `A textarea cannot have both a value attribute and body content.`, while the byte-equivalent single-line form compiled fine (and a newline-only body compiled to an initial value of `"\n"`). `preAnalyze` now strips a single leading newline from the body, matching how the HTML parser ignores one newline right after the `<textarea>` start tag. An intentional non-whitespace body still reports the value/body conflict.
