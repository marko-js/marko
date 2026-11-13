# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  aria-describedby="sM_UTA sM_UTB"
  id="sM_UTA"
/>
<label
  for="sM_UTA"
>
  a
</label>
<p
  id="sM_UTB"
>
  hint
</p>
<input
  aria-describedby="sM_UUA sM_UUB"
  id="sM_UUA"
/>
<label
  for="sM_UUA"
>
  a
</label>
<p
  id="sM_UUB"
>
  hint
</p>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
  for (const id of input.getAttribute("aria-describedby").split(" ")) {
assert(document.getElementById(id), "described by " + id);
}
}
```

# Update `{"label":"b"}`
```html
<button>
  clear
</button>
<input
  aria-describedby="sM_UTA sM_UTB"
  id="sM_UTA"
/>
<label
  for="sM_UTA"
>
  b
</label>
<p
  id="sM_UTB"
>
  hint
</p>
<input
  aria-describedby="sM_UUA sM_UUB"
  id="sM_UUA"
/>
<label
  for="sM_UUA"
>
  b
</label>
<p
  id="sM_UUB"
>
  hint
</p>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
  for (const id of input.getAttribute("aria-describedby").split(" ")) {
assert(document.getElementById(id), "described by " + id);
}
}
```
