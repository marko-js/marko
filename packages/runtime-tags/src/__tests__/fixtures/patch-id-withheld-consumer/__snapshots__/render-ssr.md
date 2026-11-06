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
<input
  id="sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  1
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
assert.equal(ids.size, document.querySelectorAll("input").length);
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
<input
  id="sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  1
</label>
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
<input
  id="sM_2UTha0A"
/>
<label
  for="sM_2UTha0A"
>
  2
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + :is(#sM_2UA, label, button, #sM_2UTha0A, label)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
assert.equal(ids.size, document.querySelectorAll("input").length);
}
```
