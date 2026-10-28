# Render `{"items":[{"key":"a"},{"key":"b"}],"on":true,"rows":[{"id":1}]}`
```html
<input
  id="sM_[\"a\"].uid"
/>
<input
  id="sM_[\"b\"].uid"
/>
<input
  id="sM_.#text/1@0.uid~1"
/>
<input
  id="sM_.#text/2@1.uid~1"
/>
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@2.#text/1@0.uid~2"
/>
<label
  for="sM_[1].#childScope/0@2.#text/1@0.uid~2"
>
  1
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
}
```

# Update `{"items":[{"key":"b"},{"key":"a"}],"on":true,"show":true,"rows":[{"id":1},{"id":2}]}`
```html
<input
  id="sM_[\"b\"].uid"
/>
<label
  for="sM_[\"b\"].uid"
>
  b
</label>
<input
  id="sM_[\"a\"].uid"
/>
<label
  for="sM_[\"a\"].uid"
>
  a
</label>
<input
  id="sM_.#text/1@0.uid~1"
/>
<label
  for="sM_.#text/1@0.uid~1"
>
  field
</label>
<input
  id="sM_.#text/2@1.uid~1"
/>
<label
  for="sM_.#text/2@1.uid~1"
>
  field
</label>
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@2.#text/1@0.uid~2"
/>
<label
  for="sM_[1].#childScope/0@2.#text/1@0.uid~2"
>
  1
</label>
<button>
  clear
</button>
<input
  id="sM_[2].#childScope/0@2^[\"packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_6*content\"].uid~2"
/>
<label
  for="sM_[2].#childScope/0@2^[\"packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_6*content\"].uid~2"
>
  2
</label>
```
## Change
```
INSERT: #sM_["b"].uid + label
INSERT: #sM_["a"].uid + label
REMOVE: label:nth-of-type(2) + #sM_["b"].uid
REMOVE: label:nth-of-type(2) + label
INSERT: #sM_["b"].uid, label
INSERT: #sM_.#text/1@0.uid~1 + label
INSERT: #sM_.#text/2@1.uid~1 + label
INSERT: label:nth-of-type(5) + :is(button, #sM_[2].#childScope/0@2^["packages/runtime-tags/src/__tests__/fixtures/patch-id-created-label/template.marko_6*content"].uid~2, label)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
}
```
