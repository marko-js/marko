# Render `{"promise":{"value":{}}}`
```html
<h1
  id="sM_1"
>
  Fields
</h1>
<label
  for="sM_3"
>
  loading
</label>
<input
  aria-describedby="sM_1"
  id="sM_3"
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
  id="sM_1"
>
  Fields
</h1>
<label
  for="sM_4"
>
  initial
</label>
<input
  aria-describedby="sM_1"
  id="sM_4"
/>
```
## Change
```
INSERT: label::text("initial")
REMOVE: t > label + #sM_3
REMOVE: label
INSERT: label, #sM_2
REMOVE: t > label + #sM_2
REMOVE: label
INSERT: #sM_1 + :is(label, #sM_4)
```
