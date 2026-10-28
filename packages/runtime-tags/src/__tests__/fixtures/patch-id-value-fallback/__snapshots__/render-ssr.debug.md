# Render `{"heading":"provided-heading","items":[{"key":"a","uid":"provided-a"},{"key":"b"}]}`
```html
<h1
  id="provided-heading"
>
  Fields
</h1>
<label
  for="sM_.second"
>
  second
</label>
<input
  id="sM_.second"
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
  for="sM_[\"b\"].#childScope/0@0.uid"
>
  b
</label>
<input
  aria-describedby="provided-heading"
  id="sM_[\"b\"].#childScope/0@0.uid"
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
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.second"
>
  second
</label>
<input
  id="sM_.second"
/>
<label
  for="sM_[\"b\"].#childScope/0@0.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@0.uid"
/>
<label
  for="provided-c"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
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
UPDATE: #sM_.heading[id] "provided-heading" => "sM_.heading"
UPDATE: #sM_["b"].#childScope/0@0.uid[aria-describedby] "provided-heading" => "sM_.heading"
REMOVE: #sM_.second + label
REMOVE: #sM_.second + #provided-a
INSERT: #sM_["b"].#childScope/0@0.uid + :is(label, #provided-c)
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
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.second"
>
  second
</label>
<input
  id="sM_.second"
/>
<label
  for="sM_[\"b\"].#childScope/0@0.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@0.uid"
/>
<label
  for="provided-c"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
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
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.second"
>
  second
</label>
<input
  id="sM_.second"
/>
<label
  for="provided-b"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="provided-b"
/>
<label
  for="sM_[\"c\"].#childScope/0@0.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"c\"].#childScope/0@0.uid"
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
UPDATE: label:nth-of-type(2)[for] "sM_[\"b\"].#childScope/0@0.uid" => "provided-b"
UPDATE: #provided-b[id] "sM_[\"b\"].#childScope/0@0.uid" => "provided-b"
UPDATE: label:nth-of-type(3)[for] "provided-c" => "sM_[\"c\"].#childScope/0@0.uid"
UPDATE: #sM_["c"].#childScope/0@0.uid[id] "provided-c" => "sM_[\"c\"].#childScope/0@0.uid"
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
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.second"
>
  second
</label>
<input
  id="sM_.second"
/>
<label
  for="provided-b"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="provided-b"
/>
<label
  for="sM_[\"c\"].#childScope/0@0.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"c\"].#childScope/0@0.uid"
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
  for="sM_.second"
>
  second
</label>
<input
  id="sM_.second"
/>
<label
  for="sM_[\"c\"].#childScope/0@0.uid"
>
  c
</label>
<input
  aria-describedby="provided-heading"
  id="sM_[\"c\"].#childScope/0@0.uid"
/>
<label
  for="sM_[\"d\"].#childScope/0@0.uid"
>
  d
</label>
<input
  aria-describedby="provided-heading"
  id="sM_[\"d\"].#childScope/0@0.uid"
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
UPDATE: #provided-heading[id] "sM_.heading" => "provided-heading"
UPDATE: #sM_["c"].#childScope/0@0.uid[aria-describedby] "sM_.heading" => "provided-heading"
REMOVE: #sM_.second + label
REMOVE: #sM_.second + #provided-b
INSERT: #sM_["c"].#childScope/0@0.uid + :is(label, #sM_["d"].#childScope/0@0.uid)
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
