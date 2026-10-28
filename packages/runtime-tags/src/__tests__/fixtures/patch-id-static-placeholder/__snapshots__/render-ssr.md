# Render `{"promise":{"value":"ready"}}`
```html
<label
  for="sM_0UA"
>
  loading
</label>
<input
  id="sM_0UA"
/>
<label
  for="sM_1UA"
>
  loading
</label>
<input
  id="sM_1UA"
/>
<label
  for="sM_gaVA"
>
  loading
</label>
<input
  id="sM_gaVA"
/>
<label
  for="sM_gbVA"
>
  loading
</label>
<input
  id="sM_gbVA"
/>
<label
  for="sM_0WA"
>
  loading
</label>
<input
  id="sM_0WA"
/>
<label
  for="sM_1WA"
>
  loading
</label>
<input
  id="sM_1WA"
/>
<label
  for="sM_0XA"
>
  loading
</label>
<input
  id="sM_0XA"
/>
<label
  for="sM_1XA"
>
  loading
</label>
<input
  id="sM_1XA"
/>
<label
  for="sM_00YA"
>
  nested
</label>
<input
  id="sM_00YA"
/>
<label
  for="sM_01YA"
>
  nested
</label>
<input
  id="sM_01YA"
/>
<label
  for="sM_10YA"
>
  nested
</label>
<input
  id="sM_10YA"
/>
<label
  for="sM_11YA"
>
  nested
</label>
<input
  id="sM_11YA"
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
REMOVE: t > label:nth-of-type(12) + #sM_11YA
REMOVE: #sM_10YA + label
REMOVE: t > label:nth-of-type(11) + #sM_10YA
REMOVE: #sM_01YA + label
REMOVE: t > label:nth-of-type(10) + #sM_01YA
REMOVE: #sM_00YA + label
REMOVE: t > label:nth-of-type(9) + #sM_00YA
REMOVE: #sM_1XA + label
REMOVE: t > label:nth-of-type(8) + #sM_1XA
REMOVE: #sM_0XA + label
REMOVE: t > label:nth-of-type(7) + #sM_0XA
REMOVE: #sM_1WA + label
REMOVE: t > label:nth-of-type(6) + #sM_1WA
REMOVE: #sM_0WA + label
REMOVE: t > label:nth-of-type(5) + #sM_0WA
REMOVE: #sM_gbVA + label
REMOVE: t > label:nth-of-type(4) + #sM_gbVA
REMOVE: #sM_gaVA + label
REMOVE: t > label:nth-of-type(3) + #sM_gaVA
REMOVE: #sM_1UA + label
REMOVE: t > label:nth-of-type(2) + #sM_1UA
REMOVE: #sM_0UA + label
REMOVE: t > label:nth-of-type(1) + #sM_0UA
REMOVE: label
INSERT: p
```
