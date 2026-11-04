# Render `{"label":"a","show":false,"items":[]}`
```html
<button>
  clear
</button>
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
}
```

# Update `{"label":"b","show":true,"items":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_UUA"
/>
<label
  for="sM_UUA"
>
  b
</label>
<input
  id="sM_UU1B"
/>
<label
  for="sM_UU1B"
>
  1
</label>
<input
  id="sM_UVA"
/>
<label
  for="sM_UVA"
>
  b
</label>
<input
  id="sM_UV1B"
/>
<label
  for="sM_UV1B"
>
  1
</label>
```
## Change
```
INSERT: button + #sM_UUA
INSERT: #sM_UUA + label
INSERT: label:nth-of-type(1) + :is(#sM_UU1B, label)
UPDATE: #sM_UU1B[id] null => "sM_UU1B"
UPDATE: label:nth-of-type(2)[for] null => "sM_UU1B"
UPDATE: label:nth-of-type(2)::text " " => "1"
INSERT: label:nth-of-type(2) + #sM_UVA
INSERT: #sM_UVA + label
INSERT: label:nth-of-type(3) + :is(#sM_UV1B, label)
UPDATE: #sM_UV1B[id] null => "sM_UV1B"
UPDATE: label:nth-of-type(4)[for] null => "sM_UV1B"
UPDATE: label:nth-of-type(4)::text " " => "1"
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
}
```
