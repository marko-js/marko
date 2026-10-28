# Render `{"rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<p>
  <input
    id="sM_1UUUUA"
  />
  <label
    for="sM_1UUUUA"
  >
    relay
  </label>
</p>
<p>
  <input
    id="sM_1UUVUA"
  />
  <label
    for="sM_1UUVUA"
  >
    p 1
  </label>
</p>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<p>
  <input
    id="sM_1UUUUA"
  />
  <label
    for="sM_1UUUUA"
  >
    relay
  </label>
</p>
<p>
  <input
    id="sM_1UUVUA"
  />
  <label
    for="sM_1UUVUA"
  >
    p 1
  </label>
</p>
<button>
  clear
</button>
<p>
  <input
    id="sM_2UUUUA"
  />
  <label
    for="sM_2UUUUA"
  >
    relay
  </label>
</p>
<p>
  <input
    id="sM_2UUVUA"
  />
  <label
    for="sM_2UUVUA"
  >
    p 2
  </label>
</p>
```
## Change
```
INSERT: p:nth-of-type(1) > :is(#sM_1UUUUA, label)
REMOVE: p:nth-of-type(1) > label + #sM_1UUUUA
REMOVE: p:nth-of-type(1) > label + label
UPDATE: #sM_1UUUUA[id] null => "sM_1UUUUA"
UPDATE: p:nth-of-type(1) > label[for] null => "sM_1UUUUA"
INSERT: p:nth-of-type(2) + :is(button, p, p)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
