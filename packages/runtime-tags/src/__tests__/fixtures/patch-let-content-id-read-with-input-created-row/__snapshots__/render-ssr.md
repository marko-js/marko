# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1TTA"
  title="a sM_1TTA"
/>
<label
  for="sM_1TTA"
>
  a
</label>
<input
  id="sM_1TUA"
  title="a sM_1TUA"
/>
<label
  for="sM_1TUA"
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
  id="sM_1TTA"
  title="b sM_1TTA"
/>
<label
  for="sM_1TTA"
>
  b
</label>
<input
  id="sM_1TUA"
  title="b sM_1TUA"
/>
<label
  for="sM_1TUA"
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
UPDATE: #sM_1TTA[title] "a sM_1TTA" => "b sM_1TTA"
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: #sM_1TUA[title] "a sM_1TUA" => "b sM_1TUA"
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
