# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#text/1@0.uid"
  title="a sM_[1].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/1@0.uid"
>
  a
</label>
<input
  id="sM_[1].#childScope/0@0.#text/2@1.uid"
  title="a sM_[1].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/2@1.uid"
>
  a
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
  assert.equal(
input.title,
input.labels [0].textContent + " " + input.id,
"title of " + input.id,
  );
}
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#text/1@0.uid"
  title="b sM_[1].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/1@0.uid"
>
  b
</label>
<input
  id="sM_[1].#childScope/0@0.#text/2@1.uid"
  title="b sM_[1].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/2@1.uid"
>
  b
</label>
<button>
  clear
</button>
<input
  id="cM_0"
  title="b cM_0"
/>
<label
  for="cM_0"
>
  b
</label>
<input
  id="cM_1"
  title="b cM_1"
/>
<label
  for="cM_1"
>
  b
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + button
INSERT: button:nth-of-type(2) + :is(#cM_0, label)
INSERT: label:nth-of-type(3) + :is(#cM_1, label)
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: #sM_[1].#childScope/0@0.#text/1@0.uid[title] "a sM_[1].#childScope/0@0.#text/1@0.uid" => "b sM_[1].#childScope/0@0.#text/1@0.uid"
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: #sM_[1].#childScope/0@0.#text/2@1.uid[title] "a sM_[1].#childScope/0@0.#text/2@1.uid" => "b sM_[1].#childScope/0@0.#text/2@1.uid"
UPDATE: label:nth-of-type(3)::text " " => "b"
UPDATE: #cM_0[title] null => "b cM_0"
UPDATE: label:nth-of-type(4)::text " " => "b"
UPDATE: #cM_1[title] null => "b cM_1"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
  assert.equal(
input.title,
input.labels [0].textContent + " " + input.id,
"title of " + input.id,
  );
}
```
