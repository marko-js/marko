# Render `{"promise":{"value":"ready"}}`
```html
<label
  for="sM_[0].#childScope/0@0.uid"
>
  loading
</label>
<input
  id="sM_[0].#childScope/0@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.uid"
>
  loading
</label>
<input
  id="sM_[1].#childScope/0@0.uid"
/>
<label
  for="sM_[\"a\"].#childScope/0@1.uid"
>
  loading
</label>
<input
  id="sM_[\"a\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@1.uid"
>
  loading
</label>
<input
  id="sM_[\"b\"].#childScope/0@1.uid"
/>
<label
  for="sM_[0].#childScope/0@2.uid"
>
  loading
</label>
<input
  id="sM_[0].#childScope/0@2.uid"
/>
<label
  for="sM_[1].#childScope/0@2.uid"
>
  loading
</label>
<input
  id="sM_[1].#childScope/0@2.uid"
/>
<label
  for="sM_[0].#childScope/0@3.uid"
>
  loading
</label>
<input
  id="sM_[0].#childScope/0@3.uid"
/>
<label
  for="sM_[1].#childScope/0@3.uid"
>
  loading
</label>
<input
  id="sM_[1].#childScope/0@3.uid"
/>
<label
  for="sM_[0][0].#childScope/0@4.uid"
>
  nested
</label>
<input
  id="sM_[0][0].#childScope/0@4.uid"
/>
<label
  for="sM_[0][1].#childScope/0@4.uid"
>
  nested
</label>
<input
  id="sM_[0][1].#childScope/0@4.uid"
/>
<label
  for="sM_[1][0].#childScope/0@4.uid"
>
  nested
</label>
<input
  id="sM_[1][0].#childScope/0@4.uid"
/>
<label
  for="sM_[1][1].#childScope/0@4.uid"
>
  nested
</label>
<input
  id="sM_[1][1].#childScope/0@4.uid"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(ids.size, 12);
}
```

# Update
```html
<p>
  ready
</p>
```
## Change
```
INSERT: p::text("ready")
REMOVE: t > label:nth-of-type(12) + #sM_[1][1].#childScope/0@4.uid
REMOVE: #sM_[1][0].#childScope/0@4.uid + label
REMOVE: t > label:nth-of-type(11) + #sM_[1][0].#childScope/0@4.uid
REMOVE: #sM_[0][1].#childScope/0@4.uid + label
REMOVE: t > label:nth-of-type(10) + #sM_[0][1].#childScope/0@4.uid
REMOVE: #sM_[0][0].#childScope/0@4.uid + label
REMOVE: t > label:nth-of-type(9) + #sM_[0][0].#childScope/0@4.uid
REMOVE: #sM_[1].#childScope/0@3.uid + label
REMOVE: t > label:nth-of-type(8) + #sM_[1].#childScope/0@3.uid
REMOVE: #sM_[0].#childScope/0@3.uid + label
REMOVE: t > label:nth-of-type(7) + #sM_[0].#childScope/0@3.uid
REMOVE: #sM_[1].#childScope/0@2.uid + label
REMOVE: t > label:nth-of-type(6) + #sM_[1].#childScope/0@2.uid
REMOVE: #sM_[0].#childScope/0@2.uid + label
REMOVE: t > label:nth-of-type(5) + #sM_[0].#childScope/0@2.uid
REMOVE: #sM_["b"].#childScope/0@1.uid + label
REMOVE: t > label:nth-of-type(4) + #sM_["b"].#childScope/0@1.uid
REMOVE: #sM_["a"].#childScope/0@1.uid + label
REMOVE: t > label:nth-of-type(3) + #sM_["a"].#childScope/0@1.uid
REMOVE: #sM_[1].#childScope/0@0.uid + label
REMOVE: t > label:nth-of-type(2) + #sM_[1].#childScope/0@0.uid
REMOVE: #sM_[0].#childScope/0@0.uid + label
REMOVE: t > label:nth-of-type(1) + #sM_[0].#childScope/0@0.uid
REMOVE: label
INSERT: p
```
