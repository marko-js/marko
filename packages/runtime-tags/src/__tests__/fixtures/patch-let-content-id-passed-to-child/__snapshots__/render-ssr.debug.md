# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  aria-describedby="sM_.#childScope/0@1.#text/1@0.uid sM_.#childScope/0@1.#text/1@0.hint"
  id="sM_.#childScope/0@1.#text/1@0.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/1@0.uid"
>
  a
</label>
<p
  id="sM_.#childScope/0@1.#text/1@0.hint"
>
  hint
</p>
<input
  aria-describedby="sM_.#childScope/0@1.#text/2@1.uid sM_.#childScope/0@1.#text/2@1.hint"
  id="sM_.#childScope/0@1.#text/2@1.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/2@1.uid"
>
  a
</label>
<p
  id="sM_.#childScope/0@1.#text/2@1.hint"
>
  hint
</p>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
  for (const id of input.getAttribute("aria-describedby").split(" ")) {
assert(document.getElementById(id), "described by " + id);
}
}
```

# Update `{"label":"b"}`
```html
<button>
  clear
</button>
<input
  aria-describedby="sM_.#childScope/0@1.#text/1@0.uid sM_.#childScope/0@1.#text/1@0.hint"
  id="sM_.#childScope/0@1.#text/1@0.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/1@0.uid"
>
  b
</label>
<p
  id="sM_.#childScope/0@1.#text/1@0.hint"
>
  hint
</p>
<input
  aria-describedby="sM_.#childScope/0@1.#text/2@1.uid sM_.#childScope/0@1.#text/2@1.hint"
  id="sM_.#childScope/0@1.#text/2@1.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/2@1.uid"
>
  b
</label>
<p
  id="sM_.#childScope/0@1.#text/2@1.hint"
>
  hint
</p>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
  for (const id of input.getAttribute("aria-describedby").split(" ")) {
assert(document.getElementById(id), "described by " + id);
}
}
```
