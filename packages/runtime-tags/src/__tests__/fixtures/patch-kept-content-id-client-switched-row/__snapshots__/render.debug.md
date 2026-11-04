# Render `{"show":false,"label":"a","rows":[{"id":1}]}`
```html
<button>
  switch
</button>
```

# Update
```js
d.querySelector("button")?.click();
```
```html
<button>
  switch
</button>
<b>
  other
</b>
<b>
  other
</b>
```
## Change
```
INSERT: button + b
INSERT: b:nth-of-type(1) + b
```

# Update `{"show":true,"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  switch
</button>
<b>
  other
</b>
<b>
  other
</b>
<button>
  switch
</button>
<input
  id="sM_[2].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#text/1@0.uid"
>
  b
</label>
<input
  id="sM_[2].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#text/2@1.uid"
>
  b
</label>
```
## Change
```
INSERT: b:nth-of-type(2) + button
INSERT: button:nth-of-type(2) + #sM_[2].#childScope/0@0.#text/1@0.uid
INSERT: #sM_[2].#childScope/0@0.#text/1@0.uid + label
INSERT: label:nth-of-type(1) + #sM_[2].#childScope/0@0.#text/2@1.uid
INSERT: #sM_[2].#childScope/0@0.#text/2@1.uid + label
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
