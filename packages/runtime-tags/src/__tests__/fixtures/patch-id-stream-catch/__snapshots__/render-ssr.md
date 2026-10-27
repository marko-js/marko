# Render `{"promise":{"value":{}}}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_UA"
>
  loading
</label>
<input
  aria-describedby="sM_A"
  id="sM_UA"
/>
```

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id));
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert(document.getElementById(input.getAttribute("aria-describedby")));
assert(seen.size > 0);
}
```

# Update
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_VA"
>
  initial
</label>
<input
  aria-describedby="sM_A"
  id="sM_VA"
/>
```
## Change
```
INSERT: label::text("initial")
REMOVE: t > label + #sM_UA
REMOVE: label
INSERT: label, #sM_WA
REMOVE: t > label + #sM_WA
REMOVE: label
INSERT: #sM_A + :is(label, #sM_VA)
```

# Update `{"promise":{}}`

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id));
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert(document.getElementById(input.getAttribute("aria-describedby")));
assert(seen.size > 0);
}
```
