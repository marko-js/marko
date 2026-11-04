# Render `{"items":[{"key":"a"},{"key":"b"}],"on":true,"rows":[{"id":1}]}`
```html
<input
  id="sM_gaA"
/>
<input
  id="sM_gbA"
/>
<input
  id="sM_UB"
/>
<input
  id="sM_VB"
/>
<button>
  clear
</button>
<input
  id="sM_1WUC"
/>
<label
  for="sM_1WUC"
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
}
```

# Update `{"items":[{"key":"b"},{"key":"a"}],"on":true,"show":true,"rows":[{"id":1},{"id":2}]}`
```html
<input
  id="sM_gbA"
/>
<label
  for="sM_gbA"
>
  b
</label>
<input
  id="sM_gaA"
/>
<label
  for="sM_gaA"
>
  a
</label>
<input
  id="sM_UB"
/>
<label
  for="sM_UB"
>
  field
</label>
<input
  id="sM_VB"
/>
<label
  for="sM_VB"
>
  field
</label>
<button>
  clear
</button>
<input
  id="sM_1WUC"
/>
<label
  for="sM_1WUC"
>
  1
</label>
<button>
  clear
</button>
<input
  id="sM_2WTha1C"
/>
<label
  for="sM_2WTha1C"
>
  2
</label>
```
## Change
```
REMOVE: label:nth-of-type(2) + #sM_gbA
INSERT: #sM_gbA
INSERT: #sM_gbA + label
INSERT: #sM_gaA + label
INSERT: #sM_UB + label
INSERT: #sM_VB + label
INSERT: label:nth-of-type(5) + button
INSERT: button:nth-of-type(2) + :is(#sM_2WTha1C, label)
UPDATE: #sM_2WTha1C[id] null => "sM_2WTha1C"
UPDATE: label:nth-of-type(6)[for] null => "sM_2WTha1C"
UPDATE: label:nth-of-type(6)::text " " => "2"
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
