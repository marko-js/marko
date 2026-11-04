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
  id="cM_2"
/>
<label
  for="cM_2"
>
  b
</label>
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
INSERT: button, button, #cM_2, label, p, p
UPDATE: p:nth-of-type(1) > label::text " " => "b"
UPDATE: p:nth-of-type(2) > label::text " " => "b"
UPDATE: label::text " " => "b"
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
  id="cM_2"
/>
<label
  for="cM_2"
>
  c
</label>
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
UPDATE: label::text "b" => "c"
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
REMOVE: button:nth-of-type(2) + #cM_2
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
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    d
  </label>
</p>
<p>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
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
