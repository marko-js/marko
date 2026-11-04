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
  id="sM_VUUA"
/>
<label
  for="sM_VUUA"
>
  b
</label>
<input
  id="sM_VVUA"
/>
<label
  for="sM_VVUA"
>
  b
</label>
```
## Change
```
INSERT: button + :is(#sM_VUUA, label)
UPDATE: #sM_VUUA[id] null => "sM_VUUA"
UPDATE: label:nth-of-type(1)[for] null => "sM_VUUA"
UPDATE: label:nth-of-type(1)::text " " => "b"
INSERT: label:nth-of-type(1) + :is(#sM_VVUA, label)
UPDATE: #sM_VVUA[id] null => "sM_VVUA"
UPDATE: label:nth-of-type(2)[for] null => "sM_VVUA"
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
