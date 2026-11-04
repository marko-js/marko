# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  aria-describedby="sM_VUA sM_VUB"
  id="sM_VUA"
/>
<label
  for="sM_VUA"
>
  a
</label>
<p
  id="sM_VUB"
>
  hint
</p>
<input
  aria-describedby="sM_VVA sM_VVB"
  id="sM_VVA"
/>
<label
  for="sM_VVA"
>
  a
</label>
<p
  id="sM_VVB"
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
  aria-describedby="sM_VUA sM_VUB"
  id="sM_VUA"
/>
<label
  for="sM_VUA"
>
  b
</label>
<p
  id="sM_VUB"
>
  hint
</p>
<input
  aria-describedby="sM_VVA sM_VVB"
  id="sM_VVA"
/>
<label
  for="sM_VVA"
>
  b
</label>
<p
  id="sM_VVB"
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
