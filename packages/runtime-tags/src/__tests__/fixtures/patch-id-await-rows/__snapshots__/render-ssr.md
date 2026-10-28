# Render `{"items":[{"promise":{"value":"a"}},{"promise":{"value":"b"}}]}`
```html
<label
  for="sM_0UA"
>
  before
</label>
<input
  id="sM_0UA"
/>
```

# Update
```html
<label
  for="sM_0UA"
>
  before
</label>
<input
  id="sM_0UA"
/>
<label
  for="sM_0VA"
>
  a
</label>
<input
  id="sM_0VA"
/>
<label
  for="sM_1UA"
>
  before
</label>
<input
  id="sM_1UA"
/>
```
## Change
```
INSERT: #sM_0UA + label
INSERT: label:nth-of-type(2)::text("a")
INSERT: label:nth-of-type(2) + #sM_0VA
INSERT: #sM_0VA + label
INSERT: label:nth-of-type(3)::text("before")
INSERT: label:nth-of-type(3) + #sM_1UA
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
  for="sM_0UA"
>
  before
</label>
<input
  id="sM_0UA"
/>
<label
  for="sM_0VA"
>
  a
</label>
<input
  id="sM_0VA"
/>
<label
  for="sM_1UA"
>
  before
</label>
<input
  id="sM_1UA"
/>
<label
  for="sM_1VA"
>
  b
</label>
<input
  id="sM_1VA"
/>
```
## Change
```
INSERT: #sM_1UA + label
INSERT: label:nth-of-type(4)::text("b")
INSERT: label:nth-of-type(4) + #sM_1VA
```

# Update `{"items":[{"promise":{"value":"b"}},{"promise":{"value":"c"}}]}`
```html
<label
  for="sM_0UA"
>
  before
</label>
<input
  id="sM_0UA"
/>
<label
  for="sM_0VA"
>
  b
</label>
<input
  id="sM_0VA"
/>
<label
  for="sM_1UA"
>
  before
</label>
<input
  id="sM_1UA"
/>
<label
  for="sM_1VA"
>
  c
</label>
<input
  id="sM_1VA"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_0VA
REMOVE: label
REMOVE: #sM_1VA
INSERT: #sM_0UA + :is(label, #sM_0VA)
INSERT: #sM_1UA + :is(label, #sM_1VA)
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
