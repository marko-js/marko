# Render `{"rows":[{"key":"a","promise":{"value":{}}},{"key":"b","promise":{"value":{}}}]}`
```html
<h1
  id="sM_1"
>
  Fields
</h1>
<label
  for="sM_2"
>
  a
</label>
<input
  aria-describedby="sM_1"
  id="sM_2"
/>
<label
  for="sM_3"
>
  b
</label>
<input
  aria-describedby="sM_1"
  id="sM_3"
/>
```

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id), "duplicate " + input.id);
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```

# Update
```html
<h1
  id="sM_1"
>
  Fields
</h1>
<label
  for="sM_4"
>
  x
</label>
<input
  aria-describedby="sM_1"
  id="sM_4"
/>
<label
  for="sM_5"
>
  y
</label>
<input
  aria-describedby="sM_1"
  id="sM_5"
/>
```
## Change
```
INSERT: label:nth-of-type(1)::text("x")
INSERT: label:nth-of-type(2)::text("y")
REMOVE: t > label + #sM_2
REMOVE: label
INSERT: #sM_1 + :is(label, #sM_4)
REMOVE: t > label + #sM_3
REMOVE: label
INSERT: #sM_4 + :is(label, #sM_5)
```

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id), "duplicate " + input.id);
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```
