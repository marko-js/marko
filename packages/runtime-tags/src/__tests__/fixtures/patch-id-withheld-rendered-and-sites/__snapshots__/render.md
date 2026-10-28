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
  x
</button>
<button>
  clear
</button>
<input
  id="sM_UUUA"
/>
<label
  for="sM_UUUA"
>
  b
</label>
<p>
  <input
    id="sM_UUVUA"
  />
  <label
    for="sM_UUVUA"
  >
    b
  </label>
</p>
<p>
  <input
    id="sM_UUWUA"
  />
  <label
    for="sM_UUWUA"
  >
    b
  </label>
</p>
```
## Change
```
INSERT: button, button, #sM_UUUA, label, p, p
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
  x
</button>
<button>
  clear
</button>
<input
  id="sM_UUUA"
/>
<label
  for="sM_UUUA"
>
  c
</label>
<p>
  <input
    id="sM_UUVUA"
  />
  <label
    for="sM_UUVUA"
  >
    c
  </label>
</p>
<p>
  <input
    id="sM_UUWUA"
  />
  <label
    for="sM_UUWUA"
  >
    c
  </label>
</p>
```
## Change
```
UPDATE: label::text "b" => "c"
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
d.querySelectorAll("button")[1]?.click();
```
```html
<button>
  x
</button>
<button>
  clear
</button>
<p>
  <input
    id="sM_UUVUA"
  />
  <label
    for="sM_UUVUA"
  >
    c
  </label>
</p>
<p>
  <input
    id="sM_UUWUA"
  />
  <label
    for="sM_UUWUA"
  >
    c
  </label>
</p>
```
## Change
```
REMOVE: button:nth-of-type(2) + #sM_UUUA
REMOVE: button:nth-of-type(2) + label
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  x
</button>
<button>
  clear
</button>
<p>
  <input
    id="sM_UUVUA"
  />
  <label
    for="sM_UUVUA"
  >
    d
  </label>
</p>
<p>
  <input
    id="sM_UUWUA"
  />
  <label
    for="sM_UUWUA"
  >
    d
  </label>
</p>
```
## Change
```
UPDATE: p:nth-of-type(1) > label::text "c" => "d"
UPDATE: p:nth-of-type(2) > label::text "c" => "d"
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
