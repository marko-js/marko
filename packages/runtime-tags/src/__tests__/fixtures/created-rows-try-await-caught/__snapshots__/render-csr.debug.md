# Render `{"show":false,"label":"a","promise":0}`
```html
<h1>
  Rows whose await rejects
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

# Update `{"show":true,"label":"b","promise":{"value":{}}}`
```html
<h1>
  Rows whose await rejects
</h1>
<button>
  x
</button>
```
## Change
```
INSERT: h1 + button
```

# Update
```html
<h1>
  Rows whose await rejects
</h1>
<button>
  x
</button>
error
```
## Change
```
INSERT: button + ::text("error")
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

# Update `{"show":true,"label":"c","promise":0}`

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
