# Render `{"promise":{"value":[{"key":"a"},{"key":"b"}]}}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.#childScope/0@0.uid"
>
  loading
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_.#childScope/0@0.uid"
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
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.#childScope/0@2.uid"
>
  before
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_.#childScope/0@2.uid"
/>
<label
  for="sM_[\"a\"].#childScope/0@3.uid"
>
  a
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"a\"].#childScope/0@3.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@3.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@3.uid"
/>
```
## Change
```
INSERT: label:nth-of-type(2)::text("a")
INSERT: label:nth-of-type(3)::text("b")
REMOVE: t > label + #sM_.#childScope/0@0.uid
REMOVE: label
INSERT: #sM_.heading + :is(label, #sM_.#childScope/0@2.uid, label, #sM_["a"].#childScope/0@3.uid, label, #sM_["b"].#childScope/0@3.uid)
```

# Update `{"promise":{"value":[{"key":"b"},{"key":"c"}]}}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="cM_0"
>
  loading
</label>
<input
  aria-describedby="sM_.heading"
  id="cM_0"
/>
```
## Change
```
INSERT: #sM_.heading + :is(label, #cM_0)
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #sM_.#childScope/0@2.uid
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #sM_["a"].#childScope/0@3.uid
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #sM_["b"].#childScope/0@3.uid
UPDATE: #cM_0[aria-describedby] null => "sM_.heading"
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
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.#childScope/0@2.uid"
>
  before
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_.#childScope/0@2.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@3.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@3.uid"
/>
<label
  for="sM_[\"c\"].#childScope/0@3.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"c\"].#childScope/0@3.uid"
/>
```
## Change
```
INSERT: #sM_.heading + :is(label, #sM_.#childScope/0@2.uid, label, #sM_["b"].#childScope/0@3.uid, label, #sM_["c"].#childScope/0@3.uid)
REMOVE: #sM_["c"].#childScope/0@3.uid + label
REMOVE: #sM_["c"].#childScope/0@3.uid + #cM_0
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
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="cM_1"
>
  loading
</label>
<input
  aria-describedby="sM_.heading"
  id="cM_1"
/>
```
## Change
```
INSERT: #sM_.heading + :is(label, #cM_1)
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #sM_.#childScope/0@2.uid
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #sM_["b"].#childScope/0@3.uid
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #sM_["c"].#childScope/0@3.uid
UPDATE: #cM_1[aria-describedby] null => "sM_.heading"
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
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.#childScope/0@1.uid"
>
  caught
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_.#childScope/0@1.uid"
/>
```
## Change
```
INSERT: #sM_.heading + :is(label, #sM_.#childScope/0@1.uid)
REMOVE: #sM_.#childScope/0@1.uid + label
REMOVE: #sM_.#childScope/0@1.uid + #cM_1
UPDATE: label[for] null => "sM_.#childScope/0@1.uid"
UPDATE: #sM_.#childScope/0@1.uid[id] null => "sM_.#childScope/0@1.uid"
UPDATE: #sM_.#childScope/0@1.uid[aria-describedby] null => "sM_.heading"
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
