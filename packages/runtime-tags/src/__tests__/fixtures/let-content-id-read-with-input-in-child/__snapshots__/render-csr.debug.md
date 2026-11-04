# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  id="cM_0"
  title="a cM_0"
/>
<label
  for="cM_0"
>
  a
</label>
<input
  id="cM_1"
  title="a cM_1"
/>
<label
  for="cM_1"
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
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: #cM_0[title] "a cM_0" => "b cM_0"
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: #cM_1[title] "a cM_1" => "b cM_1"
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
