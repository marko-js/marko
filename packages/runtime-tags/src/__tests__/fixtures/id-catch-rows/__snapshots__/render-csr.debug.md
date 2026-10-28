# Render `{"rows":[{"key":"a","promise":{}},{"key":"b","promise":{}}]}`
```html
<h1
  id="cM_0"
>
  Fields
</h1>
```

# Update
```html
<h1
  id="cM_0"
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
## Change
```
INSERT: #cM_0 + p
UPDATE: p:nth-of-type(1)::text " " => "1"
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text " " => "2"
```

# Update `{"rows":[{"key":"a","promise":{"value":{}}},{"key":"b","promise":{"value":{}}}]}`

# Update
```html
<h1
  id="cM_0"
>
  Fields
</h1>
```
## Change
```
REMOVE: #cM_0 + p
REMOVE: #cM_0 + p
```

# Update
```html
<h1
  id="cM_0"
>
  Fields
</h1>
<label
  for="cM_1"
>
  x
</label>
<input
  aria-describedby="cM_0"
  id="cM_1"
/>
<label
  for="cM_2"
>
  y
</label>
<input
  aria-describedby="cM_0"
  id="cM_2"
/>
```
## Change
```
INSERT: #cM_0 + :is(label, #cM_1)
INSERT: #cM_1 + :is(label, #cM_2)
UPDATE: label:nth-of-type(1)[for] null => "cM_1"
UPDATE: #cM_1[id] null => "cM_1"
UPDATE: label:nth-of-type(1)::text " " => "x"
UPDATE: #cM_1[aria-describedby] null => "cM_0"
UPDATE: label:nth-of-type(2)[for] null => "cM_2"
UPDATE: #cM_2[id] null => "cM_2"
UPDATE: label:nth-of-type(2)::text " " => "y"
UPDATE: #cM_2[aria-describedby] null => "cM_0"
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
