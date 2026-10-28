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
REMOVE: p
REMOVE: p
INSERT: #sM_A + :is(label, #sM_gaUA)
UPDATE: label:nth-of-type(1)[for] null => "sM_gaUA"
UPDATE: #sM_gaUA[id] null => "sM_gaUA"
UPDATE: #sM_gaUA[aria-describedby] null => "sM_A"
UPDATE: label:nth-of-type(1)::text " " => "x"
INSERT: #sM_gaUA + :is(label, #sM_gbUA)
UPDATE: label:nth-of-type(2)[for] null => "sM_gbUA"
UPDATE: #sM_gbUA[id] null => "sM_gbUA"
UPDATE: #sM_gbUA[aria-describedby] null => "sM_A"
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
