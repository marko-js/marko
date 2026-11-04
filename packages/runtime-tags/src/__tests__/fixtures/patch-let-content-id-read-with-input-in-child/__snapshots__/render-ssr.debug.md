# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  id="sM_.#childScope/0@1.#text/1@0.uid"
  title="a sM_.#childScope/0@1.#text/1@0.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/1@0.uid"
>
  a
</label>
<input
  id="sM_.#childScope/0@1.#text/2@1.uid"
  title="a sM_.#childScope/0@1.#text/2@1.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/2@1.uid"
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

# Update `{"label":"b"}`
```html
<button>
  clear
</button>
<input
  id="sM_.#childScope/0@1.#text/1@0.uid"
  title="b sM_.#childScope/0@1.#text/1@0.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/1@0.uid"
>
  b
</label>
<input
  id="sM_.#childScope/0@1.#text/2@1.uid"
  title="b sM_.#childScope/0@1.#text/2@1.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/2@1.uid"
>
  b
</label>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: #sM_.#childScope/0@1.#text/1@0.uid[title] "a sM_.#childScope/0@1.#text/1@0.uid" => "b sM_.#childScope/0@1.#text/1@0.uid"
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: #sM_.#childScope/0@1.#text/2@1.uid[title] "a sM_.#childScope/0@1.#text/2@1.uid" => "b sM_.#childScope/0@1.#text/2@1.uid"
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
