# Render `{"items":[{"promise":{"value":"a"}},{"promise":{"value":"b"}}]}`
```html
<label
  for="sM_1"
>
  before
</label>
<input
  id="sM_1"
/>
```

# Update
```html
<label
  for="sM_1"
>
  before
</label>
<input
  id="sM_1"
/>
<label
  for="sM_3"
>
  a
</label>
<input
  id="sM_3"
/>
<label
  for="sM_2"
>
  before
</label>
<input
  id="sM_2"
/>
```
## Change
```
INSERT: #sM_1 + label
INSERT: label:nth-of-type(2)::text("a")
INSERT: label:nth-of-type(2) + #sM_3
INSERT: #sM_3 + label
INSERT: label:nth-of-type(3)::text("before")
INSERT: label:nth-of-type(3) + #sM_2
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
  for="sM_1"
>
  before
</label>
<input
  id="sM_1"
/>
<label
  for="sM_3"
>
  a
</label>
<input
  id="sM_3"
/>
<label
  for="sM_2"
>
  before
</label>
<input
  id="sM_2"
/>
<label
  for="sM_4"
>
  b
</label>
<input
  id="sM_4"
/>
```
## Change
```
INSERT: #sM_2 + label
INSERT: label:nth-of-type(4)::text("b")
INSERT: label:nth-of-type(4) + #sM_4
```
