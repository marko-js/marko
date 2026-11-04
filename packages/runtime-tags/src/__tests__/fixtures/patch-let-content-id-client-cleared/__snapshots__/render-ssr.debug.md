# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/1@0.uid"
>
  a
</label>
<input
  id="sM_[1].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/2@1.uid"
>
  a
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

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  clear
</button>
```
## Change
```
REMOVE: button + #sM_[1].#childScope/0@0.#text/1@0.uid
REMOVE: button + label
REMOVE: button + #sM_[1].#childScope/0@0.#text/2@1.uid
REMOVE: button + label
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<button>
  clear
</button>
<input
  id="cM_0"
/>
<label
  for="cM_0"
>
  b
</label>
<input
  id="cM_1"
/>
<label
  for="cM_1"
>
  b
</label>
```
## Change
```
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2) + :is(#cM_0, label)
INSERT: label:nth-of-type(1) + :is(#cM_1, label)
UPDATE: label:nth-of-type(1)::text " " => "b"
UPDATE: label:nth-of-type(2)::text " " => "b"
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
