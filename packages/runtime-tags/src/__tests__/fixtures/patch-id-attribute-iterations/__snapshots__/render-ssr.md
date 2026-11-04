# Render `{"items":["a","b"],"record":{"a":1},"end":1}`
```html
<label
  for="sM_Y0TUA"
>
  a
</label>
<input
  id="sM_Y0TUA"
/>
<label
  for="sM_Y1TUA"
>
  b
</label>
<input
  id="sM_Y1TUA"
/>
<label
  for="sM_Y2TVA"
>
  a
</label>
<input
  id="sM_Y2TVA"
/>
<label
  for="sM_Y3TWA"
>
  0
</label>
<input
  id="sM_Y3TWA"
/>
<label
  for="sM_Y4TWA"
>
  1
</label>
<input
  id="sM_Y4TWA"
/>
<label
  for="sM_Y5TXA"
>
  0
</label>
<input
  id="sM_Y5TXA"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert(ids.size > 0);
}
```

# Update `{"items":["c"],"record":{"b":2,"c":3},"end":2}`
```html
<label
  for="sM_Y0TUA"
>
  c
</label>
<input
  id="sM_Y0TUA"
/>
<label
  for="sM_Y1TVA"
>
  b
</label>
<input
  id="sM_Y1TVA"
/>
<label
  for="sM_Y2TVA"
>
  c
</label>
<input
  id="sM_Y2TVA"
/>
<label
  for="sM_Y3TWA"
>
  0
</label>
<input
  id="sM_Y3TWA"
/>
<label
  for="sM_Y4TWA"
>
  1
</label>
<input
  id="sM_Y4TWA"
/>
<label
  for="sM_Y5TWA"
>
  2
</label>
<input
  id="sM_Y5TWA"
/>
<label
  for="sM_Y6TXA"
>
  0
</label>
<input
  id="sM_Y6TXA"
/>
<label
  for="sM_Y7TXA"
>
  1
</label>
<input
  id="sM_Y7TXA"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "c"
INSERT: #sM_Y0TUA + :is(label, #sM_Y1TVA)
REMOVE: #sM_Y1TVA + label
REMOVE: #sM_Y1TVA + #sM_Y1TUA
UPDATE: label:nth-of-type(2)[for] null => "sM_Y1TVA"
UPDATE: #sM_Y1TVA[id] null => "sM_Y1TVA"
UPDATE: label:nth-of-type(2)::text " " => "b"
UPDATE: label:nth-of-type(3)::text "a" => "c"
INSERT: #sM_Y4TWA + :is(label, #sM_Y5TWA)
REMOVE: #sM_Y5TWA + label
REMOVE: #sM_Y5TWA + #sM_Y5TXA
UPDATE: label:nth-of-type(6)[for] null => "sM_Y5TWA"
UPDATE: #sM_Y5TWA[id] null => "sM_Y5TWA"
UPDATE: label:nth-of-type(6)::text " " => "2"
INSERT: #sM_Y5TWA + :is(label, #sM_Y6TXA)
UPDATE: label:nth-of-type(7)[for] null => "sM_Y6TXA"
UPDATE: #sM_Y6TXA[id] null => "sM_Y6TXA"
UPDATE: label:nth-of-type(7)::text " " => "0"
INSERT: #sM_Y6TXA + :is(label, #sM_Y7TXA)
UPDATE: label:nth-of-type(8)[for] null => "sM_Y7TXA"
UPDATE: #sM_Y7TXA[id] null => "sM_Y7TXA"
UPDATE: label:nth-of-type(8)::text " " => "1"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert(ids.size > 0);
}
```
