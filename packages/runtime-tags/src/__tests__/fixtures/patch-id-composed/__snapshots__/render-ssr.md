# Render `{"items":[{"key":"a"},{"key":"b"}]}`
```html
<h2
  id="sM_A"
>
  Fields
</h2>
<label
  for="sM_gaTA"
>
  a
</label>
<input
  aria-describedby="sM_A"
  id="sM_gaTA"
/>
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
  for="sM_gbTA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbTA"
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
```

# Update `{"items":[{"key":"b"},{"key":"c"}]}`
```html
<h2
  id="sM_A"
>
  Fields
</h2>
<label
  for="sM_gbTA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbTA"
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
  for="sM_gcTA"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcTA"
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
```
## Change
```
REMOVE: #sM_A + label
REMOVE: #sM_A + #sM_gaTA
REMOVE: #sM_A + label
REMOVE: #sM_A + #sM_gaUA
INSERT: #sM_gbUA + :is(label, #sM_gcTA, label, #sM_gcUA)
UPDATE: label:nth-of-type(3)[for] null => "sM_gcTA"
UPDATE: label:nth-of-type(3)::text " " => "c"
UPDATE: #sM_gcTA[id] null => "sM_gcTA"
UPDATE: #sM_gcTA[aria-describedby] null => "sM_A"
UPDATE: label:nth-of-type(4)[for] null => "sM_gcUA"
UPDATE: label:nth-of-type(4)::text " " => "c"
UPDATE: #sM_gcUA[id] null => "sM_gcUA"
UPDATE: #sM_gcUA[aria-describedby] null => "sM_A"
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
