# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  id="sM_VUA"
  title="a sM_VUA"
/>
<label
  for="sM_VUA"
>
  a
</label>
<input
  id="sM_VVA"
  title="a sM_VVA"
/>
<label
  for="sM_VVA"
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
  id="sM_VUA"
  title="b sM_VUA"
/>
<label
  for="sM_VUA"
>
  b
</label>
<input
  id="sM_VVA"
  title="b sM_VVA"
/>
<label
  for="sM_VVA"
>
  b
</label>
```
## Change
```
UPDATE: #sM_VUA[title] "a sM_VUA" => "b sM_VUA"
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: #sM_VVA[title] "a sM_VVA" => "b sM_VVA"
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
