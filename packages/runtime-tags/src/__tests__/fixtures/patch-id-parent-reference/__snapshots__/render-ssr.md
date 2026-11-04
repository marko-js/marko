# Render `{"items":[{"key":"a"},{"key":"b"}]}`
```html
<h2
  id="sM_A"
>
  Fields
</h2>
<label
  for="sM_gaB"
>
  a
</label>
<input
  aria-describedby="sM_A"
  id="sM_gaB"
/>
<label
  for="sM_gbB"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbB"
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
  for="sM_gbB"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbB"
/>
<label
  for="sM_gcB"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcB"
/>
```
## Change
```
REMOVE: #sM_A + label
REMOVE: #sM_A + #sM_gaB
INSERT: #sM_gbB + :is(label, #sM_gcB)
UPDATE: label:nth-of-type(2)[for] null => "sM_gcB"
UPDATE: #sM_gcB[id] null => "sM_gcB"
UPDATE: #sM_gcB[aria-describedby] null => "sM_A"
UPDATE: label:nth-of-type(2)::text " " => "c"
```

# Update
```js
for (const input of document.querySelectorAll("input")) {
const id = input.getAttribute("aria-describedby");
assert.equal(document.getElementById(id)?.textContent, "Fields");
}
```
