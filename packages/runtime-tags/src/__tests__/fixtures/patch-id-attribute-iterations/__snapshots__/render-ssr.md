# Render `{"items":["a","b"],"record":{"a":1},"end":1}`
```html
<label
  for="sM_Z0UVA"
>
  a
</label>
<input
  id="sM_Z0UVA"
/>
<label
  for="sM_Z1UVA"
>
  b
</label>
<input
  id="sM_Z1UVA"
/>
<label
  for="sM_Z2UWA"
>
  a
</label>
<input
  id="sM_Z2UWA"
/>
<label
  for="sM_Z3UXA"
>
  0
</label>
<input
  id="sM_Z3UXA"
/>
<label
  for="sM_Z4UXA"
>
  1
</label>
<input
  id="sM_Z4UXA"
/>
<label
  for="sM_Z5UYA"
>
  0
</label>
<input
  id="sM_Z5UYA"
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
  for="sM_Z0UVA"
>
  c
</label>
<input
  id="sM_Z0UVA"
/>
<label
  for="sM_Z1UWA"
>
  b
</label>
<input
  id="sM_Z1UWA"
/>
<label
  for="sM_Z2UWA"
>
  c
</label>
<input
  id="sM_Z2UWA"
/>
<label
  for="sM_Z3UXA"
>
  0
</label>
<input
  id="sM_Z3UXA"
/>
<label
  for="sM_Z4UXA"
>
  1
</label>
<input
  id="sM_Z4UXA"
/>
<label
  for="sM_Z5UXA"
>
  2
</label>
<input
  id="sM_Z5UXA"
/>
<label
  for="sM_Z6UYA"
>
  0
</label>
<input
  id="sM_Z6UYA"
/>
<label
  for="sM_Z7UYA"
>
  1
</label>
<input
  id="sM_Z7UYA"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "c"
INSERT: #sM_Z0UVA + :is(label, #sM_Z1UWA)
REMOVE: #sM_Z1UWA + label
REMOVE: #sM_Z1UWA + #sM_Z1UVA
UPDATE: label:nth-of-type(2)[for] null => "sM_Z1UWA"
UPDATE: #sM_Z1UWA[id] null => "sM_Z1UWA"
UPDATE: label:nth-of-type(2)::text " " => "b"
UPDATE: label:nth-of-type(3)::text "a" => "c"
INSERT: #sM_Z4UXA + :is(label, #sM_Z5UXA)
REMOVE: #sM_Z5UXA + label
REMOVE: #sM_Z5UXA + #sM_Z5UYA
UPDATE: label:nth-of-type(6)[for] null => "sM_Z5UXA"
UPDATE: #sM_Z5UXA[id] null => "sM_Z5UXA"
UPDATE: label:nth-of-type(6)::text " " => "2"
INSERT: #sM_Z5UXA + :is(label, #sM_Z6UYA)
INSERT: #sM_Z6UYA + :is(label, #sM_Z7UYA)
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
