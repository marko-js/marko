# Render
```html
<button>
  toggle
</button>
<label
  for="sM_.#text/1@0.uid"
>
  a
</label>
<input
  id="sM_.#text/1@0.uid"
/>
<label
  for="sM_.#text/2@1.uid"
>
  b
</label>
<input
  id="sM_.#text/2@1.uid"
/>
<input
  id="sM_.own"
/>
<label
  for="sM_.own"
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
  id="sM_.own"
/>
<label
  for="sM_.own"
>
  own
</label>
```
## Change
```
REMOVE: button + label
REMOVE: button + #sM_.#text/1@0.uid
REMOVE: button + label
REMOVE: button + #sM_.#text/2@1.uid
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
  id="sM_.own"
/>
<label
  for="sM_.own"
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
