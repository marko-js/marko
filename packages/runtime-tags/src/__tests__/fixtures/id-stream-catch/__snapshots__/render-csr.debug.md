# Render `{"promise":{"value":{}}}`
```html
<h1
  id="cM_0"
>
  Fields
</h1>
<label
  for="cM_1"
>
  before
</label>
<input
  aria-describedby="cM_0"
  id="cM_1"
/>
```

# Update
```html
<h1
  id="cM_0"
>
  Fields
</h1>
<label
  for="cM_2"
>
  loading
</label>
<input
  aria-describedby="cM_0"
  id="cM_2"
/>
```
## Change
```
INSERT: #cM_0 + :is(label, #cM_2)
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #cM_1
UPDATE: #cM_2[aria-describedby] null => "cM_0"
```

# Update
```html
<h1
  id="cM_0"
>
  Fields
</h1>
<label
  for="cM_3"
>
  initial
</label>
<input
  aria-describedby="cM_0"
  id="cM_3"
/>
```
## Change
```
INSERT: #cM_0 + :is(label, #cM_3)
REMOVE: #cM_3 + label
REMOVE: #cM_3 + #cM_2
UPDATE: label[for] null => "cM_3"
UPDATE: #cM_3[id] null => "cM_3"
UPDATE: label::text " " => "initial"
UPDATE: #cM_3[aria-describedby] null => "cM_0"
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
