# Render
```html
<button>
  toggle
</button>
<label
  for="cM_0"
>
  a
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  b
</label>
<input
  id="cM_1"
/>
<input
  id="cM_2"
/>
<label
  for="cM_2"
>
  own
</label>
```

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id), "duplicate " + input.id);
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(seen.size, 3);
}
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<input
  id="cM_2"
/>
<label
  for="cM_2"
>
  own
</label>
```
## Change
```
REMOVE: button + label
REMOVE: button + #cM_0
REMOVE: button + label
REMOVE: button + #cM_1
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<label
  for="cM_3"
>
  a
</label>
<input
  id="cM_3"
/>
<label
  for="cM_4"
>
  b
</label>
<input
  id="cM_4"
/>
<input
  id="cM_2"
/>
<label
  for="cM_2"
>
  own
</label>
```
## Change
```
INSERT: button + :is(label, #cM_3)
UPDATE: label:nth-of-type(1)::text " " => "a"
INSERT: #cM_3 + :is(label, #cM_4)
UPDATE: label:nth-of-type(2)::text " " => "b"
```

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id), "duplicate " + input.id);
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(seen.size, 3);
}
```
