# Render `{"items":[{"key":"a"},{"key":"b"}]}`
```html
<h2
  id="sM_A"
>
  Fields
</h2>
<label
  for="sM_gaUA"
>
  a
</label>
<input
  aria-describedby="sM_A"
  id="sM_gaUA"
/>
<label
  for="sM_gaVA"
>
  a
</label>
<input
  aria-describedby="sM_A"
  id="sM_gaVA"
/>
<label
  for="sM_gbUA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbUA"
/>
<label
  for="sM_gbVA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbVA"
/>
```

# Update `{"items":[{"key":"b"},{"key":"c"}]}`
```html
<h2
  id="sM_A"
>
  Fields
</h2>
<label
  for="sM_gbUA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbUA"
/>
<label
  for="sM_gbVA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbVA"
/>
<label
  for="sM_gcUA"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcUA"
/>
<label
  for="sM_gcVA"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcVA"
/>
```
## Change
```
REMOVE: #sM_A + label
REMOVE: #sM_A + #sM_gaUA
REMOVE: #sM_A + label
REMOVE: #sM_A + #sM_gaVA
INSERT: #sM_gbVA + :is(label, #sM_gcUA, label, #sM_gcVA)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(
document.getElementById(input.getAttribute("aria-describedby"))
  ?.textContent,
"Fields",
  );
  assert.equal(input.labels?.length, 1);
}
```
