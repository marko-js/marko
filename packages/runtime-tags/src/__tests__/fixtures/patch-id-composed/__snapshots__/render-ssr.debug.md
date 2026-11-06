# Render `{"items":[{"key":"a"},{"key":"b"}]}`
```html
<h2
  id="sM_.headingId"
>
  Fields
</h2>
<label
  for="sM_[\"a\"].#childScope/0@0.uid"
>
  a
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"a\"].#childScope/0@0.uid"
/>
<label
  for="sM_[\"a\"].#childScope/1@1.uid"
>
  a
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"a\"].#childScope/1@1.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@0.uid"
>
  b
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"b\"].#childScope/0@0.uid"
/>
<label
  for="sM_[\"b\"].#childScope/1@1.uid"
>
  b
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"b\"].#childScope/1@1.uid"
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
  for="sM_[\"b\"].#childScope/0@0.uid"
>
  b
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"b\"].#childScope/0@0.uid"
/>
<label
  for="sM_[\"b\"].#childScope/1@1.uid"
>
  b
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"b\"].#childScope/1@1.uid"
/>
<label
  for="sM_[\"c\"].#childScope/0@0.uid"
>
  c
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"c\"].#childScope/0@0.uid"
/>
<label
  for="sM_[\"c\"].#childScope/1@1.uid"
>
  c
</label>
<input
  aria-describedby="sM_.headingId"
  id="sM_[\"c\"].#childScope/1@1.uid"
/>
```
## Change
```
REMOVE: #sM_.headingId + label
REMOVE: #sM_.headingId + #sM_["a"].#childScope/0@0.uid
REMOVE: #sM_.headingId + label
REMOVE: #sM_.headingId + #sM_["a"].#childScope/1@1.uid
INSERT: #sM_["b"].#childScope/1@1.uid + :is(label, #sM_["c"].#childScope/0@0.uid, label, #sM_["c"].#childScope/1@1.uid)
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
