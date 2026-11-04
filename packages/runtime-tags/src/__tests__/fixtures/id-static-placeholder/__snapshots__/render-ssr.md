# Render `{"promise":{"value":"ready"}}`
```html
<label
  for="sM_1"
>
  loading
</label>
<input
  id="sM_1"
/>
<label
  for="sM_2"
>
  loading
</label>
<input
  id="sM_2"
/>
<label
  for="sM_3"
>
  loading
</label>
<input
  id="sM_3"
/>
<label
  for="sM_4"
>
  loading
</label>
<input
  id="sM_4"
/>
<label
  for="sM_5"
>
  loading
</label>
<input
  id="sM_5"
/>
<label
  for="sM_6"
>
  loading
</label>
<input
  id="sM_6"
/>
<label
  for="sM_7"
>
  loading
</label>
<input
  id="sM_7"
/>
<label
  for="sM_8"
>
  loading
</label>
<input
  id="sM_8"
/>
<label
  for="sM_9"
>
  nested
</label>
<input
  id="sM_9"
/>
<label
  for="sM_a"
>
  nested
</label>
<input
  id="sM_a"
/>
<label
  for="sM_b"
>
  nested
</label>
<input
  id="sM_b"
/>
<label
  for="sM_c"
>
  nested
</label>
<input
  id="sM_c"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(ids.size, 12);
}
```

# Update
```html
<p>
  ready
</p>
```
## Change
```
INSERT: p::text("ready")
REMOVE: t > label:nth-of-type(12) + #sM_c
REMOVE: #sM_b + label
REMOVE: t > label:nth-of-type(11) + #sM_b
REMOVE: #sM_a + label
REMOVE: t > label:nth-of-type(10) + #sM_a
REMOVE: #sM_9 + label
REMOVE: t > label:nth-of-type(9) + #sM_9
REMOVE: #sM_8 + label
REMOVE: t > label:nth-of-type(8) + #sM_8
REMOVE: #sM_7 + label
REMOVE: t > label:nth-of-type(7) + #sM_7
REMOVE: #sM_6 + label
REMOVE: t > label:nth-of-type(6) + #sM_6
REMOVE: #sM_5 + label
REMOVE: t > label:nth-of-type(5) + #sM_5
REMOVE: #sM_4 + label
REMOVE: t > label:nth-of-type(4) + #sM_4
REMOVE: #sM_3 + label
REMOVE: t > label:nth-of-type(3) + #sM_3
REMOVE: #sM_2 + label
REMOVE: t > label:nth-of-type(2) + #sM_2
REMOVE: #sM_1 + label
REMOVE: t > label:nth-of-type(1) + #sM_1
REMOVE: label
INSERT: p
```
