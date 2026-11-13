# Render `{"show":false,"label":"a"}`

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
  clear
</button>
<p>
  <input
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    b
  </label>
</p>
<p>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
  >
    b
  </label>
</p>
```
## Change
```
INSERT: button, p, p
UPDATE: p:nth-of-type(1) > label::text " " => "b"
UPDATE: p:nth-of-type(2) > label::text " " => "b"
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

# Update `{"show":true,"label":"c"}`
```html
<button>
  clear
</button>
<p>
  <input
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    c
  </label>
</p>
<p>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
  >
    c
  </label>
</p>
```
## Change
```
UPDATE: p:nth-of-type(1) > label::text "b" => "c"
UPDATE: p:nth-of-type(2) > label::text "b" => "c"
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
  clear
</button>
<p />
<p />
```
## Change
```
REMOVE: p:nth-of-type(1) > #cM_0
REMOVE: p:nth-of-type(1) > label
REMOVE: p:nth-of-type(2) > #cM_1
REMOVE: p:nth-of-type(2) > label
```

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
