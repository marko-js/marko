# Render `{"rows":[{"id":1}]}`
```html
<input
  id="sM_1UA"
/>
<label
  for="sM_1UA"
>
  own
</label>
<button>
  clear
</button>
<p>
  <input
    id="sM_1UUUA"
  />
  <label
    for="sM_1UUUA"
  >
    1
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
<input
  id="sM_1UA"
/>
<label
  for="sM_1UA"
>
  own
</label>
<button>
  clear
</button>
<p>
  <input
    id="sM_1UUUA"
  />
  <label
    for="sM_1UUUA"
  >
    1
  </label>
</p>
<input
  id="sM_2UA"
/>
<label
  for="sM_2UA"
>
  own
</label>
<button>
  clear
</button>
<p>
  <input
    id="sM_2UUUA"
  />
  <label
    for="sM_2UUUA"
  >
    2
  </label>
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + :is(#sM_2UA, label, button, p)
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
