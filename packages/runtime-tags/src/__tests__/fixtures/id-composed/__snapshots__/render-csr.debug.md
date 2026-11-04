# Render `{"items":[{"key":"a"},{"key":"b"}]}`
```html
<h2
  id="cM_0"
>
  Fields
</h2>
<label
  for="cM_1"
>
  a
</label>
<input
  aria-describedby="cM_0"
  id="cM_1"
/>
<label
  for="cM_2"
>
  a
</label>
<input
  aria-describedby="cM_0"
  id="cM_2"
/>
<label
  for="cM_3"
>
  b
</label>
<input
  aria-describedby="cM_0"
  id="cM_3"
/>
<label
  for="cM_4"
>
  b
</label>
<input
  aria-describedby="cM_0"
  id="cM_4"
/>
```

# Update `{"items":[{"key":"b"},{"key":"c"}]}`
```html
<h2
  id="cM_0"
>
  Fields
</h2>
<label
  for="cM_3"
>
  b
</label>
<input
  aria-describedby="cM_0"
  id="cM_3"
/>
<label
  for="cM_4"
>
  b
</label>
<input
  aria-describedby="cM_0"
  id="cM_4"
/>
<label
  for="cM_5"
>
  c
</label>
<input
  aria-describedby="cM_0"
  id="cM_5"
/>
<label
  for="cM_6"
>
  c
</label>
<input
  aria-describedby="cM_0"
  id="cM_6"
/>
```
## Change
```
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #cM_1
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #cM_2
INSERT: #cM_4 + :is(label, #cM_5, label, #cM_6)
UPDATE: #cM_5[aria-describedby] null => "cM_0"
UPDATE: #cM_6[aria-describedby] null => "cM_0"
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
