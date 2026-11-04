# Render `{"items":["a","b"],"record":{"a":1},"end":1}`
```html
<label
  for="cM_0"
>
  a
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  b
</label>
<input
  id="cM_1"
/>
<label
  for="cM_2"
>
  a
</label>
<input
  id="cM_2"
/>
<label
  for="cM_3"
>
  0
</label>
<input
  id="cM_3"
/>
<label
  for="cM_4"
>
  1
</label>
<input
  id="cM_4"
/>
<label
  for="cM_5"
>
  0
</label>
<input
  id="cM_5"
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
  for="cM_0"
>
  c
</label>
<input
  id="cM_0"
/>
<label
  for="cM_6"
>
  b
</label>
<input
  id="cM_6"
/>
<label
  for="cM_2"
>
  c
</label>
<input
  id="cM_2"
/>
<label
  for="cM_3"
>
  0
</label>
<input
  id="cM_3"
/>
<label
  for="cM_4"
>
  1
</label>
<input
  id="cM_4"
/>
<label
  for="cM_7"
>
  2
</label>
<input
  id="cM_7"
/>
<label
  for="cM_8"
>
  0
</label>
<input
  id="cM_8"
/>
<label
  for="cM_9"
>
  1
</label>
<input
  id="cM_9"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "c"
INSERT: #cM_0 + :is(label, #cM_6)
REMOVE: #cM_6 + label
REMOVE: #cM_6 + #cM_1
UPDATE: label:nth-of-type(3)::text "a" => "c"
INSERT: #cM_4 + :is(label, #cM_7)
REMOVE: #cM_7 + label
REMOVE: #cM_7 + #cM_5
INSERT: #cM_7 + :is(label, #cM_8)
INSERT: #cM_8 + :is(label, #cM_9)
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
