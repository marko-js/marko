# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  id="sM_UTA"
  title="a sM_UTA"
/>
<label
  for="sM_UTA"
>
  a
</label>
<input
  id="sM_UUA"
  title="a sM_UUA"
/>
<label
  for="sM_UUA"
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
  id="sM_UTA"
  title="b sM_UTA"
/>
<label
  for="sM_UTA"
>
  b
</label>
<input
  id="sM_UUA"
  title="b sM_UUA"
/>
<label
  for="sM_UUA"
>
  b
</label>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: #sM_UTA[title] "a sM_UTA" => "b sM_UTA"
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: #sM_UUA[title] "a sM_UUA" => "b sM_UUA"
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
