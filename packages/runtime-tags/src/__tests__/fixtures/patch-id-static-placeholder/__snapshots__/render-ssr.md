# Render `{"promise":{"value":"ready"}}`
```html
<label
  for="sM_0TA"
>
  loading
</label>
<input
  id="sM_0TA"
/>
<label
  for="sM_1TA"
>
  loading
</label>
<input
  id="sM_1TA"
/>
<label
  for="sM_gaUA"
>
  loading
</label>
<input
  id="sM_gaUA"
/>
<label
  for="sM_gbUA"
>
  loading
</label>
<input
  id="sM_gbUA"
/>
<label
  for="sM_0VA"
>
  loading
</label>
<input
  id="sM_0VA"
/>
<label
  for="sM_1VA"
>
  loading
</label>
<input
  id="sM_1VA"
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
  for="sM_00XA"
>
  nested
</label>
<input
  id="sM_00XA"
/>
<label
  for="sM_01XA"
>
  nested
</label>
<input
  id="sM_01XA"
/>
<label
  for="sM_10XA"
>
  nested
</label>
<input
  id="sM_10XA"
/>
<label
  for="sM_11XA"
>
  nested
</label>
<input
  id="sM_11XA"
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
REMOVE: t > label:nth-of-type(12) + #sM_11XA
REMOVE: #sM_10XA + label
REMOVE: t > label:nth-of-type(11) + #sM_10XA
REMOVE: #sM_01XA + label
REMOVE: t > label:nth-of-type(10) + #sM_01XA
REMOVE: #sM_00XA + label
REMOVE: t > label:nth-of-type(9) + #sM_00XA
REMOVE: #sM_1WA + label
REMOVE: t > label:nth-of-type(8) + #sM_1WA
REMOVE: #sM_0WA + label
REMOVE: t > label:nth-of-type(7) + #sM_0WA
REMOVE: #sM_1VA + label
REMOVE: t > label:nth-of-type(6) + #sM_1VA
REMOVE: #sM_0VA + label
REMOVE: t > label:nth-of-type(5) + #sM_0VA
REMOVE: #sM_gbUA + label
REMOVE: t > label:nth-of-type(4) + #sM_gbUA
REMOVE: #sM_gaUA + label
REMOVE: t > label:nth-of-type(3) + #sM_gaUA
REMOVE: #sM_1TA + label
REMOVE: t > label:nth-of-type(2) + #sM_1TA
REMOVE: #sM_0TA + label
REMOVE: t > label:nth-of-type(1) + #sM_0TA
REMOVE: label
INSERT: p
```
