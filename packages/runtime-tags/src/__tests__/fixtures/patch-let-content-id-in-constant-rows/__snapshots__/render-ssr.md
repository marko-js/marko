# Render `{"label":"a"}`
```html
<p>
  a
</p>
<button>
  clear
</button>
<input
  id="sM_TT0A"
  name="r"
  type="radio"
/>
<label
  for="sM_TT0A"
>
  1
</label>
<input
  id="sM_TT1A"
  name="r"
  type="radio"
/>
<label
  for="sM_TT1A"
>
  2
</label>
<input
  id="sM_TU0A"
  name="r"
  type="radio"
/>
<label
  for="sM_TU0A"
>
  1
</label>
<input
  id="sM_TU1A"
  name="r"
  type="radio"
/>
<label
  for="sM_TU1A"
>
  2
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"label":"b"}`
```html
<p>
  b
</p>
<button>
  clear
</button>
<input
  id="sM_TT0A"
  name="r"
  type="radio"
/>
<label
  for="sM_TT0A"
>
  1
</label>
<input
  id="sM_TT1A"
  name="r"
  type="radio"
/>
<label
  for="sM_TT1A"
>
  2
</label>
<input
  id="sM_TU0A"
  name="r"
  type="radio"
/>
<label
  for="sM_TU0A"
>
  1
</label>
<input
  id="sM_TU1A"
  name="r"
  type="radio"
/>
<label
  for="sM_TU1A"
>
  2
</label>
```
## Change
```
UPDATE: p::text "a" => "b"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
