# Render `{"items":[{"key":"a"},{"key":"b"}],"on":true,"rows":[{"id":1}]}`
```html
<input
  id="sM_1"
/>
<input
  id="sM_2"
/>
<input
  id="sM_3"
/>
<input
  id="sM_4"
/>
<button>
  clear
</button>
<input
  id="sM_5"
/>
<label
  for="sM_5"
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
