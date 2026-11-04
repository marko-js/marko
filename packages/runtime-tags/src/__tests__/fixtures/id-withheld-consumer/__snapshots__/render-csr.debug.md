# Render `{"rows":[{"id":1}]}`
```html
<input
  id="cM_0"
/>
<label
  for="cM_0"
>
  own
</label>
<button>
  clear
</button>
<input
  id="cM_1"
/>
<label
  for="cM_1"
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
  id="cM_0"
/>
<label
  for="cM_0"
>
  own
</label>
<button>
  clear
</button>
<input
  id="cM_1"
/>
<label
  for="cM_1"
>
  1
</label>
<input
  id="cM_2"
/>
<label
  for="cM_2"
>
  own
</label>
<button>
  clear
</button>
<input
  id="cM_3"
/>
<label
  for="cM_3"
>
  2
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + :is(#cM_2, label, button, #cM_3, label)
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
