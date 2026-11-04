# Render `{"items":[{"promise":{"value":"a"}},{"promise":{"value":"b"}}]}`
```html
<label
  for="cM_0"
>
  before
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  before
</label>
<input
  id="cM_1"
/>
```

# Update
```html
<label
  for="cM_0"
>
  before
</label>
<input
  id="cM_0"
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
  for="cM_1"
>
  before
</label>
<input
  id="cM_1"
/>
```
## Change
```
INSERT: #cM_0 + :is(label, #cM_2)
UPDATE: label:nth-of-type(2)::text " " => "a"
```

# Update
```html
<label
  for="cM_0"
>
  before
</label>
<input
  id="cM_0"
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
  for="cM_1"
>
  before
</label>
<input
  id="cM_1"
/>
<label
  for="cM_3"
>
  b
</label>
<input
  id="cM_3"
/>
```
## Change
```
INSERT: #cM_1 + :is(label, #cM_3)
UPDATE: label:nth-of-type(4)::text " " => "b"
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

# Update `{"items":[{"promise":{}},{"promise":{}}]}`

# Update
```html
<label
  for="cM_0"
>
  before
</label>
<input
  id="cM_0"
/>
<label
  for="cM_2"
>
  b
</label>
<input
  id="cM_2"
/>
<label
  for="cM_1"
>
  before
</label>
<input
  id="cM_1"
/>
<label
  for="cM_3"
>
  c
</label>
<input
  id="cM_3"
/>
```
## Change
```
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: label:nth-of-type(4)::text "b" => "c"
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
