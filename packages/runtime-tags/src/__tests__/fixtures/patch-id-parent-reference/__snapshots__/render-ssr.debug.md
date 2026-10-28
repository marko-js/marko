# Render `{"items":[{"key":"a"},{"key":"b"}]}`
```html
<h2
  id="sM_.headingId"
>
  Fields
</h2>
<label
  for="sM_[\"a\"].uid"
>
  a
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"a\"].uid"
/>
<label
  for="sM_[\"b\"].uid"
>
  b
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"b\"].uid"
/>
```

# Update `{"items":[{"key":"b"},{"key":"c"}]}`
```html
<h2
  id="sM_.headingId"
>
  Fields
</h2>
<label
  for="sM_[\"b\"].uid"
>
  b
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"b\"].uid"
/>
<label
  for="sM_[\"c\"].uid"
>
  c
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"c\"].uid"
/>
```
## Change
```
REMOVE: #sM_.headingId + label
REMOVE: #sM_.headingId + #sM_["a"].uid
INSERT: #sM_["b"].uid + :is(label, #sM_["c"].uid)
```

# Update
```js
for (const input of document.querySelectorAll("input")) {
const id = input.getAttribute("aria-describedby");
assert.equal(document.getElementById(id)?.textContent, "Fields");
}
```
