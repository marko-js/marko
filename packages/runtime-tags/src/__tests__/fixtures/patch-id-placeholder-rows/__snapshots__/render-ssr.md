# Render `{"rows":[{"key":"a","promise":{"value":{}}},{"key":"b","promise":{"value":{}}}]}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
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
  for="sM_gbUA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbUA"
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
  for="sM_gaVA"
>
  x
</label>
<input
  aria-describedby="sM_A"
  id="sM_gaVA"
/>
<label
  for="sM_gbVA"
>
  y
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbVA"
/>
```
## Change
```
INSERT: label:nth-of-type(1)::text("x")
INSERT: label:nth-of-type(2)::text("y")
REMOVE: t > label + #sM_gaUA
REMOVE: label
INSERT: #sM_A + :is(label, #sM_gaVA)
REMOVE: t > label + #sM_gbUA
REMOVE: label
INSERT: #sM_gaVA + :is(label, #sM_gbVA)
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
