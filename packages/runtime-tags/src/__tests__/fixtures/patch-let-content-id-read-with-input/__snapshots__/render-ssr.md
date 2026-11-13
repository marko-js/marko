# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  id="sM_TTA"
  title="a sM_TTA"
/>
<label
  for="sM_TTA"
>
  a
</label>
<input
  id="sM_TUA"
  title="a sM_TUA"
/>
<label
  for="sM_TUA"
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
  id="sM_TTA"
  title="b sM_TTA"
/>
<label
  for="sM_TTA"
>
  b
</label>
<input
  id="sM_TUA"
  title="b sM_TUA"
/>
<label
  for="sM_TUA"
>
  b
</label>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: #sM_TTA[title] "a sM_TTA" => "b sM_TTA"
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: #sM_TUA[title] "a sM_TUA" => "b sM_TUA"
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
