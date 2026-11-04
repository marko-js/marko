# Render `{"loaded":false,"items":[{"key":"a","promise":{}},{"key":"b","promise":{}}]}`
```html
<section
  name="a"
>
  <label
    for="sM_gaVUA"
  >
    a
  </label>
  <input
    id="sM_gaVUA"
  />
</section>
<section
  name="b"
>
  <label
    for="sM_gbVUA"
  >
    b
  </label>
  <input
    id="sM_gbVUA"
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
  for="sM_gbVTA"
>
  b
</label>
<input
  id="sM_gbVTA"
/>
<label
  for="sM_gbVUUA"
>
  b
</label>
<input
  id="sM_gbVUUA"
/>
<label
  for="sM_gcVTA"
>
  c
</label>
<input
  id="sM_gcVTA"
/>
<label
  for="sM_gcVUUA"
>
  c
</label>
<input
  id="sM_gcVUUA"
/>
```
## Change
```
INSERT: label, #sM_gbVTA, label, #sM_gbVUUA
REMOVE: #sM_gbVUUA + label
REMOVE: #sM_gbVUUA + #cM_0
INSERT: #sM_gbVUUA + :is(label, #sM_gcVTA, label, #sM_gcVUUA)
REMOVE: #sM_gcVUUA + label
REMOVE: #sM_gcVUUA + #cM_1
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
<section
  name="a"
>
  <label
    for="sM_gaVUA"
  >
    a
  </label>
  <input
    id="sM_gaVUA"
  />
</section>
```
## Change
```
REMOVE: label
REMOVE: #sM_gbVTA
REMOVE: label
REMOVE: #sM_gbVUUA
INSERT: #cM_2 + section
INSERT: label, #cM_2
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #sM_gcVTA
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #sM_gcVUUA
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
    for="sM_gcVUA"
  >
    c
  </label>
  <input
    id="sM_gcVUA"
  />
</section>
<section
  name="a"
>
  <label
    for="sM_gaVUA"
  >
    a
  </label>
  <input
    id="sM_gaVUA"
  />
</section>
```
## Change
```
INSERT: section
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #cM_2
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
