# Render `{"title":"TITLE","note":"note v1","$global":{"persisted":true}}`
```html
<h1>
  TITLE
</h1>
<button
  class="collapse"
>
  toggle
</button>
loading
```

# Update
```html
<h1>
  TITLE
</h1>
<button
  class="collapse"
>
  toggle
</button>
<p
  class="note"
>
  note v1
</p>
```
## Change
```
INSERT: .note::text("note v1")
REMOVE: ::text("loading")
INSERT: .collapse + .note
```

# Update
```js
document.querySelector("button.collapse").click();
```
```html
<h1>
  TITLE
</h1>
<button
  class="collapse"
>
  toggle
</button>
```
## Change
```
REMOVE: .collapse + p
```

# Update update frame 1 of 2

# Update `{"title":"TITLE","note":"note v1","$global":{"persisted":true}}`

# Update update frame 1 of 2

# Update `{"title":"TITLE","note":"note v1","$global":{"persisted":true}}`
## Console
```
ERROR "navigate() document fallback: Error: A persisted update selected a renderer (\"packages/runtime-tags/src/__tests__/fixtures/persisted-collapse-before-seed/template.marko_1_update\") with no registered update and no loader, so the navigation cannot complete client-side."
```

# Update update frame 1 of 2

# Update `{"title":"TITLE","note":"note v2","$global":{"persisted":true}}`

# Update
```js
assert.equal(document.querySelector("p.note"), null, "stays collapsed");
assert.equal(document.querySelector("h1")?.textContent, "TITLE");
```

# Update
```js
document.querySelector("button.collapse").click();
```
```html
<h1>
  TITLE
</h1>
<button
  class="collapse"
>
  toggle
</button>
<p
  class="note"
>
  note v2
</p>
```
## Change
```
INSERT: .collapse + .note
UPDATE: .note::text " " => "note v2"
```

# Update
```js
assert.equal(
document.querySelector("p.note")?.textContent,
"note v2",
"re-expanded await shows the patched note",
  );
```
