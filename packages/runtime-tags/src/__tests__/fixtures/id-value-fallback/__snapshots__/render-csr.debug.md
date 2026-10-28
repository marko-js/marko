# Render `{"heading":"provided-heading","items":[{"key":"a","uid":"provided-a"},{"key":"b"}]}`
```html
<h1
  id="provided-heading"
>
  Fields
</h1>
<label
  for="cM_0"
>
  second
</label>
<input
  id="cM_0"
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
  for="cM_1"
>
  b
</label>
<input
  aria-describedby="provided-heading"
  id="cM_1"
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
  id="cM_2"
>
  Fields
</h1>
<label
  for="cM_0"
>
  second
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
  aria-describedby="cM_2"
  id="cM_1"
/>
<label
  for="provided-c"
>
  c
</label>
<input
  aria-describedby="cM_2"
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
UPDATE: #cM_2[id] "provided-heading" => "cM_2"
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #provided-a
INSERT: #cM_1 + :is(label, #provided-c)
UPDATE: #cM_1[aria-describedby] "provided-heading" => "cM_2"
UPDATE: #provided-c[aria-describedby] null => "cM_2"
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
  id="cM_2"
>
  Fields
</h1>
<label
  for="cM_0"
>
  second
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
  aria-describedby="cM_2"
  id="cM_1"
/>
<label
  for="provided-c"
>
  c
</label>
<input
  aria-describedby="cM_2"
  id="provided-c"
/>
<label
  for="cM_3"
>
  local
</label>
<input
  id="cM_3"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: label:nth-of-type(4)[for] "given" => "cM_3"
UPDATE: #cM_3[id] "given" => "cM_3"
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
  id="cM_2"
>
  Fields
</h1>
<label
  for="cM_0"
>
  second
</label>
<input
  id="cM_0"
/>
<label
  for="provided-b"
>
  b
</label>
<input
  aria-describedby="cM_2"
  id="provided-b"
/>
<label
  for="cM_4"
>
  c
</label>
<input
  aria-describedby="cM_2"
  id="cM_4"
/>
<label
  for="cM_3"
>
  local
</label>
<input
  id="cM_3"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: label:nth-of-type(2)[for] "cM_1" => "provided-b"
UPDATE: #provided-b[id] "cM_1" => "provided-b"
UPDATE: label:nth-of-type(3)[for] "provided-c" => "cM_4"
UPDATE: #cM_4[id] "provided-c" => "cM_4"
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
  id="cM_2"
>
  Fields
</h1>
<label
  for="cM_0"
>
  second
</label>
<input
  id="cM_0"
/>
<label
  for="provided-b"
>
  b
</label>
<input
  aria-describedby="cM_2"
  id="provided-b"
/>
<label
  for="cM_4"
>
  c
</label>
<input
  aria-describedby="cM_2"
  id="cM_4"
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
UPDATE: label:nth-of-type(4)[for] "cM_3" => "given"
UPDATE: #given[id] "cM_3" => "given"
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
  for="cM_0"
>
  second
</label>
<input
  id="cM_0"
/>
<label
  for="cM_4"
>
  c
</label>
<input
  aria-describedby="provided-heading"
  id="cM_4"
/>
<label
  for="cM_5"
>
  d
</label>
<input
  aria-describedby="provided-heading"
  id="cM_5"
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
UPDATE: #provided-heading[id] "cM_2" => "provided-heading"
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #provided-b
INSERT: #cM_4 + :is(label, #cM_5)
UPDATE: #cM_4[aria-describedby] "cM_2" => "provided-heading"
UPDATE: #cM_5[aria-describedby] null => "provided-heading"
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
