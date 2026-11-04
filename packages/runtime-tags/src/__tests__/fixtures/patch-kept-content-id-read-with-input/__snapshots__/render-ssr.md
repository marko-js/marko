# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  id="sM_UUA"
  title="a sM_UUA"
/>
<label
  for="sM_UUA"
>
  a
</label>
<input
  id="sM_UVA"
  title="a sM_UVA"
/>
<label
  for="sM_UVA"
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
  id="sM_UUA"
  title="b sM_UUA"
/>
<label
  for="sM_UUA"
>
  b
</label>
<input
  id="sM_UVA"
  title="b sM_UVA"
/>
<label
  for="sM_UVA"
>
  b
</label>
```
## Change
```
UPDATE: #sM_UUA[title] "a sM_UUA" => "b sM_UUA"
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: #sM_UVA[title] "a sM_UVA" => "b sM_UVA"
UPDATE: label:nth-of-type(2)::text "a" => "b"
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
