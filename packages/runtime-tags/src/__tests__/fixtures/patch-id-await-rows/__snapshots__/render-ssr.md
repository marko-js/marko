# Render `{"items":[{"promise":{"value":"a"}},{"promise":{"value":"b"}}]}`
```html
<label
  for="sM_0TA"
>
  before
</label>
<input
  id="sM_0TA"
/>
```

# Update
```html
<label
  for="sM_0TA"
>
  before
</label>
<input
  id="sM_0TA"
/>
<label
  for="sM_0UA"
>
  a
</label>
<input
  id="sM_0UA"
/>
<label
  for="sM_1TA"
>
  before
</label>
<input
  id="sM_1TA"
/>
```
## Change
```
INSERT: #sM_0TA + label
INSERT: label:nth-of-type(2)::text("a")
INSERT: label:nth-of-type(2) + #sM_0UA
INSERT: #sM_0UA + label
INSERT: label:nth-of-type(3)::text("before")
INSERT: label:nth-of-type(3) + #sM_1TA
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

# Update
```html
<label
  for="sM_0TA"
>
  before
</label>
<input
  id="sM_0TA"
/>
<label
  for="sM_0UA"
>
  a
</label>
<input
  id="sM_0UA"
/>
<label
  for="sM_1TA"
>
  before
</label>
<input
  id="sM_1TA"
/>
<label
  for="sM_1UA"
>
  b
</label>
<input
  id="sM_1UA"
/>
```
## Change
```
INSERT: #sM_1TA + label
INSERT: label:nth-of-type(4)::text("b")
INSERT: label:nth-of-type(4) + #sM_1UA
```

# Update `{"items":[{"promise":{"value":"b"}},{"promise":{"value":"c"}}]}`
```html
<label
  for="sM_0TA"
>
  before
</label>
<input
  id="sM_0TA"
/>
<label
  for="sM_0UA"
>
  b
</label>
<input
  id="sM_0UA"
/>
<label
  for="sM_1TA"
>
  before
</label>
<input
  id="sM_1TA"
/>
<label
  for="sM_1UA"
>
  c
</label>
<input
  id="sM_1UA"
/>
```
## Change
```
REMOVE: #sM_0TA + label
REMOVE: label:nth-of-type(2) + #sM_0UA
REMOVE: #sM_1TA + label
REMOVE: label:nth-of-type(4) + #sM_1UA
INSERT: #sM_0TA + :is(label, #sM_0UA)
INSERT: #sM_1TA + :is(label, #sM_1UA)
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
