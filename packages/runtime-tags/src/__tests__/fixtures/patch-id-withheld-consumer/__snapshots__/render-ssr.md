# Render `{"rows":[{"id":1}]}`
```html
<input
  id="sM_1TA"
/>
<label
  for="sM_1TA"
>
  own
</label>
<button>
  clear
</button>
<input
  id="sM_1TTA"
/>
<label
  for="sM_1TTA"
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
  id="sM_1TA"
/>
<label
  for="sM_1TA"
>
  own
</label>
<button>
  clear
</button>
<input
  id="sM_1TTA"
/>
<label
  for="sM_1TTA"
>
  1
</label>
<input
  id="sM_2TA"
/>
<label
  for="sM_2TA"
>
  own
</label>
<button>
  clear
</button>
<input
  id="cM_0"
/>
<label
  for="cM_0"
>
  2
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + :is(#sM_2TA, label, button)
UPDATE: #sM_2TA[id] null => "sM_2TA"
UPDATE: label:nth-of-type(3)[for] null => "sM_2TA"
INSERT: button:nth-of-type(2) + :is(#cM_0, label)
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
