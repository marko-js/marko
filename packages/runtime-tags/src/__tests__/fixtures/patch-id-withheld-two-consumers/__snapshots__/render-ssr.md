# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  a
</label>
<button>
  clear
</button>
<input
  id="sM_1VUA"
/>
<label
  for="sM_1VUA"
>
  a
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

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  b
</label>
<button>
  clear
</button>
<input
  id="sM_1VUA"
/>
<label
  for="sM_1VUA"
>
  b
</label>
<button>
  clear
</button>
<input
  id="sM_2UUA"
/>
<label
  for="sM_2UUA"
>
  b
</label>
<button>
  clear
</button>
<input
  id="sM_2VUA"
/>
<label
  for="sM_2VUA"
>
  b
</label>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: label:nth-of-type(2) + :is(button, #sM_2UUA, label, button, #sM_2VUA, label)
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
