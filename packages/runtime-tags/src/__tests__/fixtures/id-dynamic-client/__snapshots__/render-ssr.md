# Render
```html
<button>
  toggle
</button>
<label
  for="sM_1"
>
  a
</label>
<input
  id="sM_1"
/>
<label
  for="sM_2"
>
  b
</label>
<input
  id="sM_2"
/>
<input
  id="sM_3"
/>
<label
  for="sM_3"
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
  id="sM_3"
/>
<label
  for="sM_3"
>
  own
</label>
```
## Change
```
REMOVE: button + label
REMOVE: button + #sM_1
REMOVE: button + label
REMOVE: button + #sM_2
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
  id="sM_3"
/>
<label
  for="sM_3"
>
  own
</label>
```
## Change
```
INSERT: button + :is(label, #cM_0)
UPDATE: label:nth-of-type(1)::text " " => "a"
INSERT: #cM_0 + :is(label, #cM_1)
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
