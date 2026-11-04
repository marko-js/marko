# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1VUUA"
/>
<label
  for="sM_1VUUA"
>
  a
</label>
<input
  id="sM_1VVUA"
/>
<label
  for="sM_1VVUA"
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
  id="sM_1VUUA"
/>
<label
  for="sM_1VUUA"
>
  b
</label>
<input
  id="sM_1VVUA"
/>
<label
  for="sM_1VVUA"
>
  b
</label>
<button>
  clear
</button>
<input
  id="sM_2VUUA"
/>
<label
  for="sM_2VUUA"
>
  b
</label>
<input
  id="sM_2VVUA"
/>
<label
  for="sM_2VVUA"
>
  b
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + button
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: button:nth-of-type(2) + :is(#sM_2VUUA, label)
INSERT: label:nth-of-type(3) + :is(#sM_2VVUA, label)
UPDATE: #sM_2VUUA[id] null => "sM_2VUUA"
UPDATE: label:nth-of-type(3)[for] null => "sM_2VUUA"
UPDATE: #sM_2VVUA[id] null => "sM_2VVUA"
UPDATE: label:nth-of-type(4)[for] null => "sM_2VVUA"
UPDATE: label:nth-of-type(3)::text " " => "b"
UPDATE: label:nth-of-type(4)::text " " => "b"
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
