---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/translator/util/translate-attrs.ts › buildContent
---

# Resume an attribute tag body that is serialized through a parent tag's body parameter

When a component iterates its own attribute tags inside a body it hands to another custom tag, and that tag builds its body-parameter object from its own `input`, the child writes `input.<attrTag>` into its scope but the top-level call site still builds each attribute tag's body with `_content` instead of `_content_resume`. Every server render then dies with `Unable to serialize "input.option" … (reading content)`, which is the plainest component-library composition there is (a field wrapper around a `<select>` full of `<@option>`). The serialize reason propagates correctly when the same attribute tags are serialized directly in the child (`at-tags-serialized-iteration`) or through a nested `<if>` in the same file, so only the body-parameter tag boundary drops it. The trigger is narrow and worth pinning in a fixture: a literal or `<const>`-derived parameter object is fine and `{ d: input.description }` is not, attribute tags with no body content are fine, and `[...input.option]` does not help — the only escape today is to stop using body content for the attribute tag.

Check: with `tags/ui-field.marko` = `<${input.content}({ d: input.description })/>`, `tags/ui-select.marko` = `<ui-field|c| description="d"><for|o| of=input.option><span ...c><${o.content}/></span></for></ui-field>` and `template.marko` = `<ui-select><@option value="a">A</@option></ui-select>`, `pnpm run compile -- -o html -d template.marko` emits `content: _content(…)` for the `<@option>` body and an SSR render throws `Unable to serialize "input.option"`; it should emit `_content_resume(…)` and render the span.
