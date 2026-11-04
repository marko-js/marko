# Render `{"items":[{"key":"a"},{"key":"b"}]}`
```html
<label
  for="sM_[\"a\"].uid"
>
  a
</label>
<input
  id="sM_[\"a\"].uid"
/>
<label
  for="sM_[\"b\"].uid"
>
  b
</label>
<input
  id="sM_[\"b\"].uid"
/>
```

# Update `{"items":[{"key":"b"},{"key":"c"}]}`
```html
<label
  for="sM_[\"b\"].uid"
>
  b
</label>
<input
  id="sM_[\"b\"].uid"
/>
<label
  for="sM_[\"c\"].uid"
>
  c
</label>
<input
  id="sM_[\"c\"].uid"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_["a"].uid
INSERT: #sM_["b"].uid + :is(label, #sM_["c"].uid)
UPDATE: label:nth-of-type(2)[for] null => "sM_[\"c\"].uid"
UPDATE: #sM_["c"].uid[id] null => "sM_[\"c\"].uid"
UPDATE: label:nth-of-type(2)::text " " => "c"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```

# Update `{"items":[{"key":1},{"key":"1"},{"key":"-"},{"key":"_"}]}`
```html
<label
  for="sM_[1].uid"
>
  1
</label>
<input
  id="sM_[1].uid"
/>
<label
  for="sM_[\"1\"].uid"
>
  1
</label>
<input
  id="sM_[\"1\"].uid"
/>
<label
  for="sM_[\"-\"].uid"
>
  -
</label>
<input
  id="sM_[\"-\"].uid"
/>
<label
  for="sM_[\"_\"].uid"
>
  _
</label>
<input
  id="sM_[\"_\"].uid"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_["b"].uid
REMOVE: label
REMOVE: #sM_["c"].uid
INSERT: label, #sM_[1].uid
INSERT: #sM_[1].uid + :is(label, #sM_["1"].uid)
INSERT: #sM_["1"].uid + :is(label, #sM_["-"].uid)
INSERT: #sM_["-"].uid + :is(label, #sM_["_"].uid)
UPDATE: label:nth-of-type(1)[for] null => "sM_[1].uid"
UPDATE: #sM_[1].uid[id] null => "sM_[1].uid"
UPDATE: label:nth-of-type(1)::text " " => "1"
UPDATE: label:nth-of-type(2)[for] null => "sM_[\"1\"].uid"
UPDATE: #sM_["1"].uid[id] null => "sM_[\"1\"].uid"
UPDATE: label:nth-of-type(2)::text " " => "1"
UPDATE: label:nth-of-type(3)[for] null => "sM_[\"-\"].uid"
UPDATE: #sM_["-"].uid[id] null => "sM_[\"-\"].uid"
UPDATE: label:nth-of-type(3)::text " " => "-"
UPDATE: label:nth-of-type(4)[for] null => "sM_[\"_\"].uid"
UPDATE: #sM_["_"].uid[id] null => "sM_[\"_\"].uid"
UPDATE: label:nth-of-type(4)::text " " => "_"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```
