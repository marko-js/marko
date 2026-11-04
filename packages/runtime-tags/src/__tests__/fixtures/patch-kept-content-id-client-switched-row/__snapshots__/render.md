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
  id="sM_2UUA"
/>
<label
  for="sM_2UUA"
>
  b
</label>
<input
  id="sM_2UVA"
/>
<label
  for="sM_2UVA"
>
  b
</label>
```
## Change
```
INSERT: b:nth-of-type(2) + button
INSERT: button:nth-of-type(2) + #sM_2UUA
INSERT: #sM_2UUA + label
INSERT: label:nth-of-type(1) + #sM_2UVA
INSERT: #sM_2UVA + label
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
