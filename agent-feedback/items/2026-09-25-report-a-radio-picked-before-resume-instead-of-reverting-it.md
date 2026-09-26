---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/controllable.ts › _attr_input_checkedValue_script
---

# Report a radio picked before resume instead of reverting it

On resume `syncControllableFormInput` queues `onChange` for every radio whose `checked !== defaultChecked`, which includes the SSR-default radio the user unchecked by picking another one before the page resumed. That radio's handler computes `newValue === undefined`, adopts the group's `defaultChecked` value, and re-checks the default, so the user's pick is reverted and never reported. The site comment ("`newValue` is only undefined here when the firing radio is being unchecked (a form reset)") is false on resume. Direction: on resume, queue the catch-up `onChange` only for radios that are now checked, and correct the comment.

Check: fixture `template.marko` = `<let/v="a"/>` `<for|x| of=["a", "b", "c"]><input type="radio" name="g" value=x checkedValue:=v/></for>` `<p>${v}</p>` `<html-script>document.querySelector("input[value=c]").checked = true</html-script>` (runs while the page streams, before resume), `skip_csr: true`, steps `[{}, (d) => { for (const el of d.querySelectorAll("input")) el.setAttribute("data-live-checked", String(el.checked)); }]`: `render.debug.md` shows radio `a` checked, `c` unchecked and `<p>a</p>`, where `c` and `<p>c</p>` are expected.
