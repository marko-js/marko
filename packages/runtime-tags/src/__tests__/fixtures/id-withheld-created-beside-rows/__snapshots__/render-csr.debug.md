# Render `{"show":true,"label":"a"}`
```html
<h1>
  Kept content beside rows
</h1>
<section>
  <input
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    a
  </label>
</section>
<button>
  x
</button>
<section>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
  >
    a
  </label>
</section>
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
<h1>
  Kept content beside rows
</h1>
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
<button>
  x
</button>
<section>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
  >
    b
  </label>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > label::text "a" => "b"
UPDATE: section:nth-of-type(2) > label::text "a" => "b"
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

# Update `{"show":false,"label":"c"}`
```html
<h1>
  Kept content beside rows
</h1>
```
## Change
```
REMOVE: h1 + section
REMOVE: h1 + button
REMOVE: h1 + section
```

# Update `{"show":true,"label":"d"}`
```html
<h1>
  Kept content beside rows
</h1>
<section>
  <input
    id="cM_2"
  />
  <label
    for="cM_2"
  >
    d
  </label>
</section>
<button>
  x
</button>
<section>
  <input
    id="cM_3"
  />
  <label
    for="cM_3"
  >
    d
  </label>
</section>
```
## Change
```
INSERT: h1 + :is(section, button, section)
UPDATE: section:nth-of-type(1) > label::text " " => "d"
UPDATE: section:nth-of-type(2) > label::text " " => "d"
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
