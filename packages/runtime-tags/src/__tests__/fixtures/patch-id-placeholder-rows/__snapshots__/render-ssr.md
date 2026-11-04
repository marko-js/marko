# Render `{"rows":[{"key":"a","promise":{"value":{}}},{"key":"b","promise":{"value":{}}}]}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
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
  for="sM_gbTA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbTA"
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
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_gaUA"
>
  x
</label>
<input
  aria-describedby="sM_A"
  id="sM_gaUA"
/>
<label
  for="sM_gbUA"
>
  y
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbUA"
/>
```
## Change
```
INSERT: label:nth-of-type(1)::text("x")
INSERT: label:nth-of-type(2)::text("y")
REMOVE: t > label + #sM_gaTA
REMOVE: label
INSERT: #sM_A + :is(label, #sM_gaUA)
REMOVE: t > label + #sM_gbTA
REMOVE: label
INSERT: #sM_gaUA + :is(label, #sM_gbUA)
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
