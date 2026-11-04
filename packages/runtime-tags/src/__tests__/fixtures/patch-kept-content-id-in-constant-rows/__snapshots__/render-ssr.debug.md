# Render `{"label":"a"}`
```html
<p>
  a
</p>
<button>
  clear
</button>
<input
  id="sM_.#childScope/1@0.#text/1@0[0].rid"
  name="r"
  type="radio"
/>
<label
  for="sM_.#childScope/1@0.#text/1@0[0].rid"
>
  1
</label>
<input
  id="sM_.#childScope/1@0.#text/1@0[1].rid"
  name="r"
  type="radio"
/>
<label
  for="sM_.#childScope/1@0.#text/1@0[1].rid"
>
  2
</label>
<input
  id="sM_.#childScope/1@0.#text/2@1[0].rid"
  name="r"
  type="radio"
/>
<label
  for="sM_.#childScope/1@0.#text/2@1[0].rid"
>
  1
</label>
<input
  id="sM_.#childScope/1@0.#text/2@1[1].rid"
  name="r"
  type="radio"
/>
<label
  for="sM_.#childScope/1@0.#text/2@1[1].rid"
>
  2
</label>
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

# Update `{"label":"b"}`
```html
<p>
  b
</p>
<button>
  clear
</button>
<input
  id="sM_.#childScope/1@0.#text/1@0[0].rid"
  name="r"
  type="radio"
/>
<label
  for="sM_.#childScope/1@0.#text/1@0[0].rid"
>
  1
</label>
<input
  id="sM_.#childScope/1@0.#text/1@0[1].rid"
  name="r"
  type="radio"
/>
<label
  for="sM_.#childScope/1@0.#text/1@0[1].rid"
>
  2
</label>
<input
  id="sM_.#childScope/1@0.#text/2@1[0].rid"
  name="r"
  type="radio"
/>
<label
  for="sM_.#childScope/1@0.#text/2@1[0].rid"
>
  1
</label>
<input
  id="sM_.#childScope/1@0.#text/2@1[1].rid"
  name="r"
  type="radio"
/>
<label
  for="sM_.#childScope/1@0.#text/2@1[1].rid"
>
  2
</label>
```
## Change
```
UPDATE: p::text "a" => "b"
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
