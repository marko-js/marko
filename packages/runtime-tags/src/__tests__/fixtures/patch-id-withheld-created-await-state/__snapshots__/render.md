# Render `{"show":false,"label":"a","promise":{"value":"x"}}`
```html
<h1>
  A value the client holds
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

# Update `{"show":true,"label":"b","promise":{"value":"y"}}`
```html
<h1>
  A value the client holds
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
```js
assert(document.querySelector("button"), "the scope");
assert.equal(document.querySelector("input"), null);
```

# Update `{"show":true,"label":"b","promise":{"value":"y"}}`
```html
<h1>
  A value the client holds
</h1>
<button>
  x
</button>
<section>
  <input />
  <label>
    b
  </label>
</section>
```
## Change
```
INSERT: button + section
INSERT: section > :is(input, label)
```

## Patch rejected (navigate)

# Update `{"show":false,"label":"c","promise":"z"}`
```html
<h1>
  A value the client holds
</h1>
```
## Change
```
REMOVE: h1 + button
REMOVE: h1 + section
```

# Update `{"show":true,"label":"d","promise":"z"}`
```html
<h1>
  A value the client holds
</h1>
<button>
  x
</button>
<section>
  <input
    id="sM_UUUA"
  />
  <label
    for="sM_UUUA"
  >
    d
  </label>
</section>
```
## Change
```
INSERT: h1 + :is(button, section)
INSERT: section > :is(#sM_UUUA, label)
UPDATE: #sM_UUUA[id] null => "sM_UUUA"
UPDATE: section > label[for] null => "sM_UUUA"
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

# Update `{"show":true,"label":"e","promise":{"value":"v"}}`
```html
<h1>
  A value the client holds
</h1>
<button>
  x
</button>
<section>
  <input
    id="sM_UUUA"
  />
  <label
    for="sM_UUUA"
  >
    e
  </label>
</section>
```
## Change
```
UPDATE: section > label::text "d" => "e"
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

# Update `{"show":false,"label":"f","promise":"z"}`
```html
<h1>
  A value the client holds
</h1>
```
## Change
```
REMOVE: h1 + button
REMOVE: h1 + section
```

# Update `{"show":true,"label":"g","promise":{"value":"w"}}`

## Patch rejected (navigate)
