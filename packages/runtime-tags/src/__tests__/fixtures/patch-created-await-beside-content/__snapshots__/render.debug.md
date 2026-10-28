# Render `{"show":false,"label":"a","promise":"z"}`
```html
<h1>
  An await beside kept content
</h1>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"show":true,"label":"b","promise":{"value":"y"}}`
```html
<h1>
  An await beside kept content
</h1>
<button>
  x
</button>
<section>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#text/0@0.uid"
  >
    b
  </label>
</section>
<span>
  y
</span>
```
## Change
```
INSERT: h1 + :is(button, section)
INSERT: section + span
UPDATE: span::text " " => "y"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
