# Render `{"label":"a","on":false}`
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

# Update `{"label":"b","on":true}`
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
  b
</label>
<input
  id="cM_1"
/>
<label
  for="cM_1"
>
  b
</label>
```
## Change
```
INSERT: button + :is(#cM_0, label)
INSERT: label:nth-of-type(1) + :is(#cM_1, label)
UPDATE: label:nth-of-type(1)::text " " => "b"
UPDATE: label:nth-of-type(2)::text " " => "b"
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
