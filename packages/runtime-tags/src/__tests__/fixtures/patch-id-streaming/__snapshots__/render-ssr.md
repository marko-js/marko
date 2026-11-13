# Render `{"promise":{"value":[{"key":"a"},{"key":"b"}]}}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_TA"
>
  loading
</label>
<input
  aria-describedby="sM_A"
  id="sM_TA"
/>
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
  before
</label>
<input
  aria-describedby="sM_A"
  id="sM_VA"
/>
<label
  for="sM_gaWA"
>
  a
</label>
<input
  aria-describedby="sM_A"
  id="sM_gaWA"
/>
<label
  for="sM_gbWA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbWA"
/>
```
## Change
```
INSERT: label:nth-of-type(2)::text("a")
INSERT: label:nth-of-type(3)::text("b")
REMOVE: t > label + #sM_TA
REMOVE: label
INSERT: #sM_A + :is(label, #sM_VA, label, #sM_gaWA, label, #sM_gbWA)
```

# Update `{"promise":{"value":[{"key":"b"},{"key":"c"}]}}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="cM_0"
>
  loading
</label>
<input
  aria-describedby="sM_A"
  id="cM_0"
/>
```
## Change
```
INSERT: #sM_A + :is(label, #cM_0)
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #sM_VA
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #sM_gaWA
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #sM_gbWA
UPDATE: #cM_0[aria-describedby] null => "sM_A"
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

# Update `{"promise":{"value":[{"key":"b"},{"key":"c"}]}}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_VA"
>
  before
</label>
<input
  aria-describedby="sM_A"
  id="sM_VA"
/>
<label
  for="sM_gbWA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbWA"
/>
<label
  for="sM_gcWA"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcWA"
/>
```
## Change
```
INSERT: #sM_A + :is(label, #sM_VA, label, #sM_gbWA, label, #sM_gcWA)
REMOVE: #sM_gcWA + label
REMOVE: #sM_gcWA + #cM_0
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

# Update `{"promise":{"value":{}}}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="cM_1"
>
  loading
</label>
<input
  aria-describedby="sM_A"
  id="cM_1"
/>
```
## Change
```
INSERT: #sM_A + :is(label, #cM_1)
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #sM_VA
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #sM_gbWA
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #sM_gcWA
UPDATE: #cM_1[aria-describedby] null => "sM_A"
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

# Update `{"promise":{"value":{}}}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_UA"
>
  caught
</label>
<input
  aria-describedby="sM_A"
  id="sM_UA"
/>
```
## Change
```
INSERT: #sM_A + :is(label, #sM_UA)
REMOVE: #sM_UA + label
REMOVE: #sM_UA + #cM_1
UPDATE: label[for] null => "sM_UA"
UPDATE: #sM_UA[id] null => "sM_UA"
UPDATE: #sM_UA[aria-describedby] null => "sM_A"
UPDATE: label::text " " => "caught"
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

# Update `{"promise":{"value":[{"key":"d"},{"key":"b"}]}}`

## Patch rejected (navigate)
