# Render `{"show":false,"label":"a"}`
```html
<button>
  x
</button>
<section />
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

# Update `{"show":true,"label":"b"}`
```html
<button>
  x
</button>
<section>
  <input
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    b
  </label>
</section>
```
## Change
```
INSERT: section > :is(#cM_0, label)
UPDATE: section > label::text " " => "b"
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
d.querySelector("button")?.click();
```
```html
<button>
  x
</button>
<p>
  none
</p>
```
## Change
```
INSERT: button + p
REMOVE: p + section
```

# Update `{"show":false,"label":"c"}`

# Update `{"show":true,"label":"d"}`

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
