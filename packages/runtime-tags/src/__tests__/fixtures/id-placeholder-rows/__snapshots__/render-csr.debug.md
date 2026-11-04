# Render `{"rows":[{"key":"a","promise":{"value":{}}},{"key":"b","promise":{"value":{}}}]}`
```html
<h1
  id="cM_0"
>
  Fields
</h1>
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
  id="cM_0"
>
  Fields
</h1>
<label
  for="cM_1"
>
  a
</label>
<input
  aria-describedby="cM_0"
  id="cM_1"
/>
<label
  for="cM_2"
>
  b
</label>
<input
  aria-describedby="cM_0"
  id="cM_2"
/>
```
## Change
```
INSERT: #cM_0 + :is(label, #cM_1)
UPDATE: #cM_1[aria-describedby] null => "cM_0"
INSERT: #cM_1 + :is(label, #cM_2)
UPDATE: #cM_2[aria-describedby] null => "cM_0"
```

# Update
```html
<h1
  id="cM_0"
>
  Fields
</h1>
<label
  for="cM_3"
>
  x
</label>
<input
  aria-describedby="cM_0"
  id="cM_3"
/>
<label
  for="cM_4"
>
  y
</label>
<input
  aria-describedby="cM_0"
  id="cM_4"
/>
```
## Change
```
INSERT: #cM_0 + :is(label, #cM_3)
REMOVE: #cM_3 + label
REMOVE: #cM_3 + #cM_1
INSERT: #cM_3 + :is(label, #cM_4)
REMOVE: #cM_4 + label
REMOVE: #cM_4 + #cM_2
UPDATE: label:nth-of-type(1)[for] null => "cM_3"
UPDATE: #cM_3[id] null => "cM_3"
UPDATE: label:nth-of-type(1)::text " " => "x"
UPDATE: #cM_3[aria-describedby] null => "cM_0"
UPDATE: label:nth-of-type(2)[for] null => "cM_4"
UPDATE: #cM_4[id] null => "cM_4"
UPDATE: label:nth-of-type(2)::text " " => "y"
UPDATE: #cM_4[aria-describedby] null => "cM_0"
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
