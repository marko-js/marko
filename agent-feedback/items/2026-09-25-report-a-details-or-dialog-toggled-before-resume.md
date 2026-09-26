---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/controllable.ts › _attr_details_or_dialog_open_script
---

# Report a details or dialog toggled before resume

`_attr_details_or_dialog_open_script` only observes future `open` mutations. Unlike `syncControllableFormInput`, which queues `onChange` when `isResuming && hasChanged(el)`, it never compares a resumed element with the bound state. A `<details open:=o>` the user toggles before the page resumes therefore stays toggled while `o` keeps the server value, and anything derived from `o` disagrees with the page. Direction: on resume, compare `el.open` with the bound value and queue the same `openChange` report the observer sends when they differ; unlike inputs (`defaultChecked`, `defaultValue`), `<details>` keeps no server default, so resume has to carry the bound value.

Check: fixture `template.marko` = `<let/o=false/>` `<details open:=o><summary>s</summary>body</details>` `<p>${String(o)}</p>` `<html-script>document.querySelector("details").open = true</html-script>`, `skip_csr: true`, steps `[{}, () => new Promise((r) => setTimeout(r, 20))]`: `render.debug.md` shows `<details open="">` beside `<p>false</p>`.
