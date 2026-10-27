# Render `{"heading":"provided-heading","items":[{"key":"a","uid":"provided-a"},{"key":"b"}]}`
```html
<h1
  id="provided-heading"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="provided-a"
>
  a
</label>
<input
  aria-describedby="provided-heading"
  id="provided-a"
/>
<label
  for="sM_gbUA"
>
  b
</label>
<input
  aria-describedby="provided-heading"
  id="sM_gbUA"
/>
<label
  for="given"
>
  local
</label>
<input
  id="given"
/>
<button>
  toggle
</button>
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

# Update `{"items":[{"key":"b"},{"key":"c","uid":"provided-c"}]}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="sM_gbUA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbUA"
/>
<label
  for="provided-c"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="provided-c"
/>
<label
  for="given"
>
  local
</label>
<input
  id="given"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: #sM_A[id] "provided-heading" => "sM_A"
UPDATE: #sM_gbUA[aria-describedby] "provided-heading" => "sM_A"
REMOVE: #sM_B + label
REMOVE: #sM_B + #provided-a
INSERT: #sM_gbUA + :is(label, #provided-c)
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
```js
document.querySelector("button").click();
```
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="sM_gbUA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbUA"
/>
<label
  for="provided-c"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="provided-c"
/>
<label
  for="cM_0"
>
  local
</label>
<input
  id="cM_0"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: label:nth-of-type(4)[for] "given" => "cM_0"
UPDATE: #cM_0[id] "given" => "cM_0"
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

# Update `{"heading":false,"items":[{"key":"b","uid":"provided-b"},{"key":"c","uid":0}]}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="provided-b"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="provided-b"
/>
<label
  for="sM_gcUA"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcUA"
/>
<label
  for="cM_0"
>
  local
</label>
<input
  id="cM_0"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: label:nth-of-type(2)[for] "sM_gbUA" => "provided-b"
UPDATE: #provided-b[id] "sM_gbUA" => "provided-b"
UPDATE: label:nth-of-type(3)[for] "provided-c" => "sM_gcUA"
UPDATE: #sM_gcUA[id] "provided-c" => "sM_gcUA"
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
```js
document.querySelector("button").click();
```
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="provided-b"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="provided-b"
/>
<label
  for="sM_gcUA"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcUA"
/>
<label
  for="given"
>
  local
</label>
<input
  id="given"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: label:nth-of-type(4)[for] "cM_0" => "given"
UPDATE: #given[id] "cM_0" => "given"
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

# Update `{"heading":"provided-heading","items":[{"key":"c"},{"key":"d","uid":false}]}`
```html
<h1
  id="provided-heading"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="sM_gcUA"
>
  c
</label>
<input
  aria-describedby="provided-heading"
  id="sM_gcUA"
/>
<label
  for="sM_gdUA"
>
  d
</label>
<input
  aria-describedby="provided-heading"
  id="sM_gdUA"
/>
<label
  for="given"
>
  local
</label>
<input
  id="given"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: #provided-heading[id] "sM_A" => "provided-heading"
UPDATE: #sM_gcUA[aria-describedby] "sM_A" => "provided-heading"
REMOVE: #sM_B + label
REMOVE: #sM_B + #provided-b
INSERT: #sM_gcUA + :is(label, #sM_gdUA)
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
