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
INSERT: b:nth-of-type(2) + button
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
