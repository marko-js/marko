# Render `{"rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1UUUA"
/>
<label
  for="sM_1UUUA"
>
  relay
</label>
<input
  id="sM_1UUVA"
/>
<label
  for="sM_1UUVA"
>
  p 1
</label>
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
<input
  id="sM_1UUUA"
/>
<label
  for="sM_1UUUA"
>
  relay
</label>
<input
  id="sM_1UUVA"
/>
<label
  for="sM_1UUVA"
>
  p 1
</label>
<button>
  clear
</button>
<input
  id="sM_2UUUA"
/>
<label
  for="sM_2UUUA"
>
  relay
</label>
<input
  id="sM_2UUVA"
/>
<label
  for="sM_2UUVA"
>
  p 2
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + :is(button, #sM_2UUUA, label, #sM_2UUVA, label)
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
