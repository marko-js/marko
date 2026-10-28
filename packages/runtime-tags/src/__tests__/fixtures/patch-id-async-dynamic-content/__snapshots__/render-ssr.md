# Render `{"loaded":false,"items":[{"key":"a","promise":{}},{"key":"b","promise":{}}]}`
```html
<section
  name="a"
>
  <label
    for="sM_gaWVA"
  >
    a
  </label>
  <input
    id="sM_gaWVA"
  />
</section>
<section
  name="b"
>
  <label
    for="sM_gbWVA"
  >
    b
  </label>
  <input
    id="sM_gbWVA"
  />
</section>
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

# Update `{"loaded":true,"items":[{"key":"b","promise":{"value":"b"}},{"key":"c","promise":{"value":"c"}}]}`
```html
<label
  for="cM_0"
>
  loading
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  loading
</label>
<input
  id="cM_1"
/>
```
## Change
```
REMOVE: section
INSERT: label, #cM_0
REMOVE: #cM_0 + section
INSERT: #cM_0 + :is(label, #cM_1)
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

# Update `{"loaded":true,"items":[{"key":"b","promise":{"value":"b"}},{"key":"c","promise":{"value":"c"}}]}`
```html
<label
  for="sM_gbWUA"
>
  b
</label>
<input
  id="sM_gbWUA"
/>
<label
  for="sM_gbWVVA"
>
  b
</label>
<input
  id="sM_gbWVVA"
/>
<label
  for="cM_1"
>
  loading
</label>
<input
  id="cM_1"
/>
```
## Change
```
INSERT: label, #sM_gbWUA, label, #sM_gbWVVA
REMOVE: #sM_gbWVVA + label
REMOVE: #sM_gbWVVA + #cM_0
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

# Update `{"loaded":true,"items":[{"key":"b","promise":{"value":"b"}},{"key":"c","promise":{"value":"c"}}]}`
```html
<label
  for="sM_gbWUA"
>
  b
</label>
<input
  id="sM_gbWUA"
/>
<label
  for="sM_gbWVVA"
>
  b
</label>
<input
  id="sM_gbWVVA"
/>
<label
  for="sM_gcWUA"
>
  c
</label>
<input
  id="sM_gcWUA"
/>
<label
  for="sM_gcWVVA"
>
  c
</label>
<input
  id="sM_gcWVVA"
/>
```
## Change
```
INSERT: #sM_gbWVVA + :is(label, #sM_gcWUA, label, #sM_gcWVVA)
REMOVE: #sM_gcWVVA + label
REMOVE: #sM_gcWVVA + #cM_1
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

# Update `{"loaded":false,"items":[{"key":"c","promise":{"value":"c"}},{"key":"a","promise":{"value":"a"}}]}`
```html
<label
  for="cM_2"
>
  loading
</label>
<input
  id="cM_2"
/>
<label
  for="cM_3"
>
  loading
</label>
<input
  id="cM_3"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_gbWUA
REMOVE: label
REMOVE: #sM_gbWVVA
INSERT: label, #cM_2
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #sM_gcWUA
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #sM_gcWVVA
INSERT: #cM_2 + :is(label, #cM_3)
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

# Update `{"loaded":false,"items":[{"key":"c","promise":{"value":"c"}},{"key":"a","promise":{"value":"a"}}]}`
```html
<section
  name="c"
>
  <label
    for="sM_gcWVA"
  >
    c
  </label>
  <input
    id="sM_gcWVA"
  />
</section>
<label
  for="cM_3"
>
  loading
</label>
<input
  id="cM_3"
/>
```
## Change
```
INSERT: section
REMOVE: section + label
REMOVE: section + #cM_2
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

# Update `{"loaded":false,"items":[{"key":"c","promise":{"value":"c"}},{"key":"a","promise":{"value":"a"}}]}`
```html
<section
  name="c"
>
  <label
    for="sM_gcWVA"
  >
    c
  </label>
  <input
    id="sM_gcWVA"
  />
</section>
<section
  name="a"
>
  <label
    for="sM_gaWVA"
  >
    a
  </label>
  <input
    id="sM_gaWVA"
  />
</section>
```
## Change
```
INSERT: section:nth-of-type(1) + section
REMOVE: section:nth-of-type(2) + label
REMOVE: section:nth-of-type(2) + #cM_3
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
