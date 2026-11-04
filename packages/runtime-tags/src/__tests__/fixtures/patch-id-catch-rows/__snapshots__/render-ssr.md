# Render `{"rows":[{"key":"a","promise":{}},{"key":"b","promise":{}}]}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<p>
  1
</p>
<p>
  2
</p>
```

# Update `{"rows":[{"key":"a","promise":{"value":{}}},{"key":"b","promise":{"value":{}}}]}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_gaTA"
>
  x
</label>
<input
  aria-describedby="sM_A"
  id="sM_gaTA"
/>
<label
  for="sM_gbTA"
>
  y
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbTA"
/>
```
## Change
```
INSERT: #sM_A + :is(label, #sM_gaTA)
REMOVE: #sM_gaTA + p
UPDATE: label:nth-of-type(1)[for] null => "sM_gaTA"
UPDATE: #sM_gaTA[id] null => "sM_gaTA"
UPDATE: #sM_gaTA[aria-describedby] null => "sM_A"
UPDATE: label:nth-of-type(1)::text " " => "x"
INSERT: #sM_gaTA + :is(label, #sM_gbTA)
REMOVE: #sM_gbTA + p
UPDATE: label:nth-of-type(2)[for] null => "sM_gbTA"
UPDATE: #sM_gbTA[id] null => "sM_gbTA"
UPDATE: #sM_gbTA[aria-describedby] null => "sM_A"
UPDATE: label:nth-of-type(2)::text " " => "y"
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
