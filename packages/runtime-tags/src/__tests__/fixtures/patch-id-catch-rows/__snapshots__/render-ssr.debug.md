# Render `{"rows":[{"key":"a","promise":{}},{"key":"b","promise":{}}]}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<p>
  1
</p>
<p>
  2
</p>
```

# Update `{"rows":[{"key":"a","promise":{"value":{}}},{"key":"b","promise":{"value":{}}}]}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_[\"a\"].#childScope/0@0.uid"
>
  x
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"a\"].#childScope/0@0.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@0.uid"
>
  y
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@0.uid"
/>
```
## Change
```
REMOVE: p
REMOVE: p
INSERT: #sM_.heading + :is(label, #sM_["a"].#childScope/0@0.uid)
UPDATE: label:nth-of-type(1)[for] null => "sM_[\"a\"].#childScope/0@0.uid"
UPDATE: #sM_["a"].#childScope/0@0.uid[id] null => "sM_[\"a\"].#childScope/0@0.uid"
UPDATE: #sM_["a"].#childScope/0@0.uid[aria-describedby] null => "sM_.heading"
UPDATE: label:nth-of-type(1)::text " " => "x"
INSERT: #sM_["a"].#childScope/0@0.uid + :is(label, #sM_["b"].#childScope/0@0.uid)
UPDATE: label:nth-of-type(2)[for] null => "sM_[\"b\"].#childScope/0@0.uid"
UPDATE: #sM_["b"].#childScope/0@0.uid[id] null => "sM_[\"b\"].#childScope/0@0.uid"
UPDATE: #sM_["b"].#childScope/0@0.uid[aria-describedby] null => "sM_.heading"
UPDATE: label:nth-of-type(2)::text " " => "y"
```

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id), "duplicate " + input.id);
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(seen.size, 2);
}
```
