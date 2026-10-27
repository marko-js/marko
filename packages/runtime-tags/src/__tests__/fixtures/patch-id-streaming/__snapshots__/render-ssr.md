# Render `{"promise":{"value":[{"key":"a"},{"key":"b"}]}}`
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
  for="sM_WA"
>
  before
</label>
<input
  aria-describedby="sM_A"
  id="sM_WA"
/>
<label
  for="sM_gaXA"
>
  a
</label>
<input
  aria-describedby="sM_A"
  id="sM_gaXA"
/>
<label
  for="sM_gbXA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbXA"
/>
```
## Change
```
INSERT: label:nth-of-type(2)::text("a")
INSERT: label:nth-of-type(3)::text("b")
REMOVE: t > label + #sM_UA
REMOVE: label
INSERT: #sM_A + :is(label, #sM_WA, label, #sM_gaXA, label, #sM_gbXA)
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
REMOVE: #cM_0 + #sM_WA
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #sM_gaXA
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #sM_gbXA
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
  for="sM_WA"
>
  before
</label>
<input
  aria-describedby="sM_A"
  id="sM_WA"
/>
<label
  for="sM_gbXA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbXA"
/>
<label
  for="sM_gcXA"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcXA"
/>
```
## Change
```
INSERT: #sM_A + :is(label, #sM_WA, label, #sM_gbXA, label, #sM_gcXA)
REMOVE: #sM_gcXA + label
REMOVE: #sM_gcXA + #cM_0
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
REMOVE: #cM_1 + #sM_WA
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #sM_gbXA
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #sM_gcXA
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
  for="sM_VA"
>
  caught
</label>
<input
  aria-describedby="sM_A"
  id="sM_VA"
/>
```
## Change
```
INSERT: #sM_A + :is(label, #sM_VA)
REMOVE: #sM_VA + label
REMOVE: #sM_VA + #cM_1
UPDATE: label[for] null => "sM_VA"
UPDATE: #sM_VA[id] null => "sM_VA"
UPDATE: #sM_VA[aria-describedby] null => "sM_A"
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
