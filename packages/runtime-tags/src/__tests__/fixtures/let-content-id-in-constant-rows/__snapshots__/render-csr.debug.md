# Render `{"label":"a"}`
```html
<p>
  a
</p>
<button>
  clear
</button>
<input
  id="cM_0"
  name="r"
  type="radio"
/>
<label
  for="cM_0"
>
  1
</label>
<input
  id="cM_1"
  name="r"
  type="radio"
/>
<label
  for="cM_1"
>
  2
</label>
<input
  id="cM_2"
  name="r"
  type="radio"
/>
<label
  for="cM_2"
>
  1
</label>
<input
  id="cM_3"
  name="r"
  type="radio"
/>
<label
  for="cM_3"
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
  id="cM_0"
  name="r"
  type="radio"
/>
<label
  for="cM_0"
>
  1
</label>
<input
  id="cM_1"
  name="r"
  type="radio"
/>
<label
  for="cM_1"
>
  2
</label>
<input
  id="cM_2"
  name="r"
  type="radio"
/>
<label
  for="cM_2"
>
  1
</label>
<input
  id="cM_3"
  name="r"
  type="radio"
/>
<label
  for="cM_3"
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
