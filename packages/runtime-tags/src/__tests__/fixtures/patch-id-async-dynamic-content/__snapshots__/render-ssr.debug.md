# Render `{"loaded":false,"items":[{"key":"a","promise":{}},{"key":"b","promise":{}}]}`
```html
<section
  name="a"
>
  <label
    for="sM_[\"a\"].#text/0@2.#childScope/0@1.uid"
  >
    a
  </label>
  <input
    id="sM_[\"a\"].#text/0@2.#childScope/0@1.uid"
  />
</section>
<section
  name="b"
>
  <label
    for="sM_[\"b\"].#text/0@2.#childScope/0@1.uid"
  >
    b
  </label>
  <input
    id="sM_[\"b\"].#text/0@2.#childScope/0@1.uid"
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
  for="sM_[\"b\"].#text/0@2.#childScope/0@0.uid"
>
  b
</label>
<input
  id="sM_[\"b\"].#text/0@2.#childScope/0@0.uid"
/>
<label
  for="sM_[\"b\"].#text/0@2.#text/1@1.#childScope/0@1.uid"
>
  b
</label>
<input
  id="sM_[\"b\"].#text/0@2.#text/1@1.#childScope/0@1.uid"
/>
<label
  for="sM_[\"c\"].#text/0@2.#childScope/0@0.uid"
>
  c
</label>
<input
  id="sM_[\"c\"].#text/0@2.#childScope/0@0.uid"
/>
<label
  for="sM_[\"c\"].#text/0@2.#text/1@1.#childScope/0@1.uid"
>
  c
</label>
<input
  id="sM_[\"c\"].#text/0@2.#text/1@1.#childScope/0@1.uid"
/>
```
## Change
```
INSERT: label, #sM_["b"].#text/0@2.#childScope/0@0.uid, label, #sM_["b"].#text/0@2.#text/1@1.#childScope/0@1.uid
REMOVE: #sM_["b"].#text/0@2.#text/1@1.#childScope/0@1.uid + label
REMOVE: #sM_["b"].#text/0@2.#text/1@1.#childScope/0@1.uid + #cM_0
INSERT: #sM_["b"].#text/0@2.#text/1@1.#childScope/0@1.uid + :is(label, #sM_["c"].#text/0@2.#childScope/0@0.uid, label, #sM_["c"].#text/0@2.#text/1@1.#childScope/0@1.uid)
REMOVE: #sM_["c"].#text/0@2.#text/1@1.#childScope/0@1.uid + label
REMOVE: #sM_["c"].#text/0@2.#text/1@1.#childScope/0@1.uid + #cM_1
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
    for="sM_[\"a\"].#text/0@2.#childScope/0@1.uid"
  >
    a
  </label>
  <input
    id="sM_[\"a\"].#text/0@2.#childScope/0@1.uid"
  />
</section>
```
## Change
```
REMOVE: label
REMOVE: #sM_["b"].#text/0@2.#childScope/0@0.uid
REMOVE: label
REMOVE: #sM_["b"].#text/0@2.#text/1@1.#childScope/0@1.uid
INSERT: #cM_2 + section
INSERT: label, #cM_2
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #sM_["c"].#text/0@2.#childScope/0@0.uid
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #sM_["c"].#text/0@2.#text/1@1.#childScope/0@1.uid
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
    for="sM_[\"c\"].#text/0@2.#childScope/0@1.uid"
  >
    c
  </label>
  <input
    id="sM_[\"c\"].#text/0@2.#childScope/0@1.uid"
  />
</section>
<section
  name="a"
>
  <label
    for="sM_[\"a\"].#text/0@2.#childScope/0@1.uid"
  >
    a
  </label>
  <input
    id="sM_[\"a\"].#text/0@2.#childScope/0@1.uid"
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
