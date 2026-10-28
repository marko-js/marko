# Render `{"items":[{"promise":{"value":"a"}},{"promise":{"value":"b"}}]}`
```html
<label
  for="sM_[0].#childScope/0@0.uid"
>
  before
</label>
<input
  id="sM_[0].#childScope/0@0.uid"
/>
```

# Update
```html
<label
  for="sM_[0].#childScope/0@0.uid"
>
  before
</label>
<input
  id="sM_[0].#childScope/0@0.uid"
/>
<label
  for="sM_[0].#childScope/0@1.uid"
>
  a
</label>
<input
  id="sM_[0].#childScope/0@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.uid"
>
  before
</label>
<input
  id="sM_[1].#childScope/0@0.uid"
/>
```
## Change
```
INSERT: #sM_[0].#childScope/0@0.uid + label
INSERT: label:nth-of-type(2)::text("a")
INSERT: label:nth-of-type(2) + #sM_[0].#childScope/0@1.uid
INSERT: #sM_[0].#childScope/0@1.uid + label
INSERT: label:nth-of-type(3)::text("before")
INSERT: label:nth-of-type(3) + #sM_[1].#childScope/0@0.uid
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
  for="sM_[0].#childScope/0@0.uid"
>
  before
</label>
<input
  id="sM_[0].#childScope/0@0.uid"
/>
<label
  for="sM_[0].#childScope/0@1.uid"
>
  a
</label>
<input
  id="sM_[0].#childScope/0@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.uid"
>
  before
</label>
<input
  id="sM_[1].#childScope/0@0.uid"
/>
<label
  for="sM_[1].#childScope/0@1.uid"
>
  b
</label>
<input
  id="sM_[1].#childScope/0@1.uid"
/>
```
## Change
```
INSERT: #sM_[1].#childScope/0@0.uid + label
INSERT: label:nth-of-type(4)::text("b")
INSERT: label:nth-of-type(4) + #sM_[1].#childScope/0@1.uid
```

# Update `{"items":[{"promise":{"value":"b"}},{"promise":{"value":"c"}}]}`
```html
<label
  for="sM_[0].#childScope/0@0.uid"
>
  before
</label>
<input
  id="sM_[0].#childScope/0@0.uid"
/>
<label
  for="sM_[0].#childScope/0@1.uid"
>
  b
</label>
<input
  id="sM_[0].#childScope/0@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.uid"
>
  before
</label>
<input
  id="sM_[1].#childScope/0@0.uid"
/>
<label
  for="sM_[1].#childScope/0@1.uid"
>
  c
</label>
<input
  id="sM_[1].#childScope/0@1.uid"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_[0].#childScope/0@1.uid
REMOVE: label
REMOVE: #sM_[1].#childScope/0@1.uid
INSERT: #sM_[0].#childScope/0@0.uid + :is(label, #sM_[0].#childScope/0@1.uid)
INSERT: #sM_[1].#childScope/0@0.uid + :is(label, #sM_[1].#childScope/0@1.uid)
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
