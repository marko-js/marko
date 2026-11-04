# Render `{"rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="cM_0"
/>
<label
  for="cM_0"
>
  relay
</label>
<input
  id="cM_1"
/>
<label
  for="cM_1"
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
  id="cM_0"
/>
<label
  for="cM_0"
>
  relay
</label>
<input
  id="cM_1"
/>
<label
  for="cM_1"
>
  p 1
</label>
<button>
  clear
</button>
<input
  id="cM_2"
/>
<label
  for="cM_2"
>
  relay
</label>
<input
  id="cM_3"
/>
<label
  for="cM_3"
>
  p 2
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + :is(button, #cM_2, label, #cM_3, label)
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
