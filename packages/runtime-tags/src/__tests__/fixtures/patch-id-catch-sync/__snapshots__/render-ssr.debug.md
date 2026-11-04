# Render `{"rows":[{"id":1}]}`
```html
<span>
  plain
</span>
<label
  for="sM_[1].#childScope/0@0.#childScope/1@1.uid"
>
  1
</label>
<input
  id="sM_[1].#childScope/0@0.#childScope/1@1.uid"
/>
caught
<label
  for="sM_[1].#childScope/1@1.uid"
>
  row 1
</label>
<input
  id="sM_[1].#childScope/1@1.uid"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(ids.size, document.querySelectorAll("input").length);
}
```

# Update `{"rows":[{"id":1},{"id":2}]}`
```html
<span>
  plain
</span>
<label
  for="sM_[1].#childScope/0@0.#childScope/1@1.uid"
>
  1
</label>
<input
  id="sM_[1].#childScope/0@0.#childScope/1@1.uid"
/>
caught
<label
  for="sM_[1].#childScope/1@1.uid"
>
  row 1
</label>
<input
  id="sM_[1].#childScope/1@1.uid"
/>
<span>
  plain
</span>
<label
  for="sM_[2].#childScope/0@0.#childScope/1@1.uid"
>
  2
</label>
<input
  id="sM_[2].#childScope/0@0.#childScope/1@1.uid"
/>
caught
<label
  for="sM_[2].#childScope/1@1.uid"
>
  row 2
</label>
<input
  id="sM_[2].#childScope/1@1.uid"
/>
```
## Change
```
INSERT: #sM_[1].#childScope/1@1.uid + :is(span, label, #sM_[2].#childScope/0@0.#childScope/1@1.uid, ::text("caught"), label, #sM_[2].#childScope/1@1.uid)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(ids.size, document.querySelectorAll("input").length);
}
```
