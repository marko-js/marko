# Render `{"loaded":false,"items":[{"key":"a","promise":{}},{"key":"b","promise":{}}]}`

# Update
```html
<section
  name="a"
>
  <label
    for="cM_0"
  >
    a
  </label>
  <input
    id="cM_0"
  />
</section>
<section
  name="b"
>
  <label
    for="cM_1"
  >
    b
  </label>
  <input
    id="cM_1"
  />
</section>
```
## Change
```
INSERT: section
UPDATE: section:nth-of-type(1)[name] null => "a"
INSERT: section:nth-of-type(1) + section
UPDATE: section:nth-of-type(2)[name] null => "b"
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

# Update `{"loaded":true,"items":[{"key":"b","promise":{}},{"key":"c","promise":{}}]}`
```html
<section
  name="b"
>
  <label
    for="cM_1"
  >
    b
  </label>
  <input
    id="cM_1"
  />
</section>
```
## Change
```
REMOVE: section
```

# Update
```html
<label
  for="cM_2"
>
  b
</label>
<input
  id="cM_2"
/>
<label
  for="cM_3"
>
  b
</label>
<input
  id="cM_3"
/>
<label
  for="cM_4"
>
  c
</label>
<input
  id="cM_4"
/>
<label
  for="cM_5"
>
  c
</label>
<input
  id="cM_5"
/>
```
## Change
```
INSERT: label, #cM_2
REMOVE: #cM_3 + section
UPDATE: label:nth-of-type(1)::text " " => "b"
INSERT: #cM_2 + :is(label, #cM_3)
INSERT: #cM_3 + :is(label, #cM_4)
UPDATE: label:nth-of-type(3)::text " " => "c"
INSERT: #cM_4 + :is(label, #cM_5)
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

# Update `{"loaded":false,"items":[{"key":"c","promise":{}},{"key":"a","promise":{}}]}`
```html
<label
  for="cM_4"
>
  c
</label>
<input
  id="cM_4"
/>
<label
  for="cM_5"
>
  c
</label>
<input
  id="cM_5"
/>
```
## Change
```
REMOVE: label
REMOVE: #cM_2
REMOVE: label
REMOVE: #cM_3
```

# Update
```html
<section
  name="c"
>
  <label
    for="cM_6"
  >
    c
  </label>
  <input
    id="cM_6"
  />
</section>
<section
  name="a"
>
  <label
    for="cM_7"
  >
    a
  </label>
  <input
    id="cM_7"
  />
</section>
```
## Change
```
INSERT: section
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #cM_4
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #cM_5
UPDATE: section:nth-of-type(1)[name] null => "c"
INSERT: section:nth-of-type(1) + section
UPDATE: section:nth-of-type(2)[name] null => "a"
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
