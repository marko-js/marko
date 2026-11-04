# Render `{"rows":[{"key":"a","promise":{"value":{}}},{"key":"b","promise":{"value":{}}}]}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_[\"a\"].#childScope/0@0.uid"
>
  a
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"a\"].#childScope/0@0.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@0.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@0.uid"
/>
```

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id), "duplicate " + input.id);
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(seen.size, 2);
}
```

# Update
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_[\"a\"].#childScope/0@1.uid"
>
  x
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"a\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@1.uid"
>
  y
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@1.uid"
/>
```
## Change
```
INSERT: label:nth-of-type(1)::text("x")
INSERT: label:nth-of-type(2)::text("y")
REMOVE: t > label + #sM_["a"].#childScope/0@0.uid
REMOVE: label
INSERT: #sM_.heading + :is(label, #sM_["a"].#childScope/0@1.uid)
REMOVE: t > label + #sM_["b"].#childScope/0@0.uid
REMOVE: label
INSERT: #sM_["a"].#childScope/0@1.uid + :is(label, #sM_["b"].#childScope/0@1.uid)
```

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id), "duplicate " + input.id);
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(seen.size, 2);
}
```
