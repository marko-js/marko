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
  b
</label>
<input
  aria-describedby="cM_0"
  id="cM_2"
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
  for="cM_2"
>
  b
</label>
<input
  aria-describedby="cM_0"
  id="cM_2"
/>
<label
  for="cM_3"
>
  c
</label>
<input
  aria-describedby="cM_0"
  id="cM_3"
/>
```
## Change
```
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #cM_1
INSERT: #cM_2 + :is(label, #cM_3)
UPDATE: #cM_3[aria-describedby] null => "cM_0"
```

# Update
```js
for (const input of document.querySelectorAll("input")) {
const id = input.getAttribute("aria-describedby");
assert.equal(document.getElementById(id)?.textContent, "Fields");
}
```
