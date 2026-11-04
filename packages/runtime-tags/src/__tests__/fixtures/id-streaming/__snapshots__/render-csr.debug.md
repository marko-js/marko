# Render `{"promise":{}}`
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
  for="cM_1"
>
  before
</label>
<input
  aria-describedby="cM_0"
  id="cM_1"
/>
<label
  for="cM_2"
>
  a
</label>
<input
  aria-describedby="cM_0"
  id="cM_2"
/>
<label
  for="cM_3"
>
  b
</label>
<input
  aria-describedby="cM_0"
  id="cM_3"
/>
```
## Change
```
INSERT: #cM_1 + :is(label, #cM_2)
INSERT: #cM_2 + :is(label, #cM_3)
UPDATE: #cM_2[aria-describedby] null => "cM_0"
UPDATE: #cM_3[aria-describedby] null => "cM_0"
```

# Update
```js
const seen = new Set();
for (const element of document.querySelectorAll("[id]")) {
  assert(!seen.has(element.id), "duplicate id: " + element.id);
  seen.add(element.id);
for (const input of document.querySelectorAll(
  "input[id]",
)) {
  assert.equal(input.labels?.length, 1, input.outerHTML);
  const ref = input.getAttribute("aria-describedby");
  if (ref) assert(document.getElementById(ref), "missing reference: " + ref);
}
}
```

# Update `{"promise":{}}`

# Update
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
<label
  for="cM_3"
>
  b
</label>
<input
  aria-describedby="cM_0"
  id="cM_3"
/>
<label
  for="cM_4"
>
  c
</label>
<input
  aria-describedby="cM_0"
  id="cM_4"
/>
```
## Change
```
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #cM_2
INSERT: #cM_3 + :is(label, #cM_4)
UPDATE: #cM_4[aria-describedby] null => "cM_0"
```

# Update
```js
const seen = new Set();
for (const element of document.querySelectorAll("[id]")) {
  assert(!seen.has(element.id), "duplicate id: " + element.id);
  seen.add(element.id);
for (const input of document.querySelectorAll(
  "input[id]",
)) {
  assert.equal(input.labels?.length, 1, input.outerHTML);
  const ref = input.getAttribute("aria-describedby");
  if (ref) assert(document.getElementById(ref), "missing reference: " + ref);
}
}
```

# Update `{"promise":{}}`

# Update
```html
<h1
  id="cM_0"
>
  Fields
</h1>
<label
  for="cM_5"
>
  caught
</label>
<input
  aria-describedby="cM_0"
  id="cM_5"
/>
```
## Change
```
INSERT: #cM_0 + :is(label, #cM_5)
REMOVE: #cM_5 + label
REMOVE: #cM_5 + #cM_1
REMOVE: #cM_5 + label
REMOVE: #cM_5 + #cM_3
REMOVE: #cM_5 + label
REMOVE: #cM_5 + #cM_4
UPDATE: label[for] null => "cM_5"
UPDATE: #cM_5[id] null => "cM_5"
UPDATE: label::text " " => "caught"
UPDATE: #cM_5[aria-describedby] null => "cM_0"
```

# Update
```js
const seen = new Set();
for (const element of document.querySelectorAll("[id]")) {
  assert(!seen.has(element.id), "duplicate id: " + element.id);
  seen.add(element.id);
for (const input of document.querySelectorAll(
  "input[id]",
)) {
  assert.equal(input.labels?.length, 1, input.outerHTML);
  const ref = input.getAttribute("aria-describedby");
  if (ref) assert(document.getElementById(ref), "missing reference: " + ref);
}
}
```

# Update `{"promise":{}}`

# Update
```js
const seen = new Set();
for (const element of document.querySelectorAll("[id]")) {
  assert(!seen.has(element.id), "duplicate id: " + element.id);
  seen.add(element.id);
for (const input of document.querySelectorAll(
  "input[id]",
)) {
  assert.equal(input.labels?.length, 1, input.outerHTML);
  const ref = input.getAttribute("aria-describedby");
  if (ref) assert(document.getElementById(ref), "missing reference: " + ref);
}
}
```
