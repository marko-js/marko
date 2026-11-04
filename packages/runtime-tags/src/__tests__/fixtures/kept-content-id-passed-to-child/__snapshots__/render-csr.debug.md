# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  aria-describedby="cM_0 cM_1"
  id="cM_0"
/>
<label
  for="cM_0"
>
  a
</label>
<p
  id="cM_1"
>
  hint
</p>
<input
  aria-describedby="cM_2 cM_3"
  id="cM_2"
/>
<label
  for="cM_2"
>
  a
</label>
<p
  id="cM_3"
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
  aria-describedby="cM_0 cM_1"
  id="cM_0"
/>
<label
  for="cM_0"
>
  b
</label>
<p
  id="cM_1"
>
  hint
</p>
<input
  aria-describedby="cM_2 cM_3"
  id="cM_2"
/>
<label
  for="cM_2"
>
  b
</label>
<p
  id="cM_3"
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
