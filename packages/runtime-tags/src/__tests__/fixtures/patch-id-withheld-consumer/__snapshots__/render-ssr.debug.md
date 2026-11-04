# Render `{"rows":[{"id":1}]}`
```html
<input
  id="sM_[1].#childScope/0@0.own"
/>
<label
  for="sM_[1].#childScope/0@0.own"
>
  own
</label>
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#text/3@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/3@0.uid"
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
assert.equal(ids.size, document.querySelectorAll("input").length);
}
```

# Update `{"rows":[{"id":1},{"id":2}]}`
```html
<input
  id="sM_[1].#childScope/0@0.own"
/>
<label
  for="sM_[1].#childScope/0@0.own"
>
  own
</label>
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#text/3@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/3@0.uid"
>
  1
</label>
<input
  id="sM_[2].#childScope/0@0.own"
/>
<label
  for="sM_[2].#childScope/0@0.own"
>
  own
</label>
<button>
  clear
</button>
<input
  id="sM_[2].#childScope/0@0^[\"packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-consumer/template.marko_2*content\"].uid"
/>
<label
  for="sM_[2].#childScope/0@0^[\"packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-consumer/template.marko_2*content\"].uid"
>
  2
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + :is(#sM_[2].#childScope/0@0.own, label, button, #sM_[2].#childScope/0@0^["packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-consumer/template.marko_2*content"].uid, label)
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
assert.equal(ids.size, document.querySelectorAll("input").length);
}
```
