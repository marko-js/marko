# Render `{"show":false,"label":"a"}`
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

# Update `{"show":true,"label":"b"}`

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
