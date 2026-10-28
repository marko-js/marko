# Render `{"items":[{"key":"a"},{"key":"b"}],"on":true,"rows":[{"id":1}]}`
```html
<input
  id="cM_0"
/>
<input
  id="cM_1"
/>
<input
  id="cM_2"
/>
<input
  id="cM_3"
/>
<button>
  clear
</button>
<input
  id="cM_4"
/>
<label
  for="cM_4"
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
  id="cM_1"
/>
<label
  for="cM_1"
>
  b
</label>
<input
  id="cM_0"
/>
<label
  for="cM_0"
>
  a
</label>
<input
  id="cM_2"
/>
<label
  for="cM_2"
>
  field
</label>
<input
  id="cM_3"
/>
<label
  for="cM_3"
>
  field
</label>
<button>
  clear
</button>
<input
  id="cM_4"
/>
<label
  for="cM_4"
>
  1
</label>
<button>
  clear
</button>
<input
  id="cM_5"
/>
<label
  for="cM_5"
>
  2
</label>
```
## Change
```
REMOVE: label:nth-of-type(2) + #cM_1
INSERT: #cM_1
INSERT: label:nth-of-type(5) + :is(button, #cM_5, label)
INSERT: #cM_1 + label
INSERT: #cM_0 + label
INSERT: #cM_2 + label
INSERT: #cM_3 + label
UPDATE: label:nth-of-type(1)[for] null => "cM_1"
UPDATE: label:nth-of-type(2)[for] null => "cM_0"
UPDATE: label:nth-of-type(3)[for] null => "cM_2"
UPDATE: label:nth-of-type(4)[for] null => "cM_3"
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
