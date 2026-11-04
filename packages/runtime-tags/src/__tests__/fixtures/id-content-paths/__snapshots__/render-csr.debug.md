# Render `{"flip":false,"items":[{"key":"a"},{"key":"b"}]}`
```html
<label
  for="cM_3"
>
  other
</label>
<input
  id="cM_3"
/>
<section
  name="dynamic"
>
  <label
    for="cM_4"
  >
    content
  </label>
  <input
    id="cM_4"
  />
</section>
<label
  for="cM_5"
>
  a
</label>
<input
  id="cM_5"
/>
<label
  for="cM_6"
>
  b
</label>
<input
  id="cM_6"
/>
<section>
  <label
    for="cM_0"
  >
    forwarded
  </label>
  <input
    id="cM_0"
  />
</section>
<aside>
  <label
    for="cM_1"
  >
    forwarded
  </label>
  <input
    id="cM_1"
  />
</aside>
<label
  for="cM_2"
>
  nested
</label>
<input
  id="cM_2"
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

# Update `{"flip":true,"items":[{"key":"b"},{"key":"c"}]}`
```html
<label
  for="cM_7"
>
  first
</label>
<input
  id="cM_7"
/>
<label
  for="cM_8"
>
  dynamic
</label>
<input
  id="cM_8"
/>
<label
  for="cM_9"
>
  content
</label>
<input
  id="cM_9"
/>
<label
  for="cM_5"
>
  b
</label>
<input
  id="cM_5"
/>
<label
  for="cM_6"
>
  c
</label>
<input
  id="cM_6"
/>
<section>
  <label
    for="cM_0"
  >
    forwarded
  </label>
  <input
    id="cM_0"
  />
</section>
<aside>
  <label
    for="cM_1"
  >
    forwarded
  </label>
  <input
    id="cM_1"
  />
</aside>
<label
  for="cM_2"
>
  nested
</label>
<input
  id="cM_2"
/>
```
## Change
```
INSERT: label, #cM_7
REMOVE: #cM_7 + label
REMOVE: #cM_7 + #cM_3
INSERT: #cM_7 + :is(label, #cM_8)
REMOVE: #cM_9 + section
UPDATE: label:nth-of-type(2)[for] null => "cM_8"
UPDATE: #cM_8[id] null => "cM_8"
UPDATE: label:nth-of-type(2)::text " " => "dynamic"
INSERT: #cM_8 + :is(label, #cM_9)
UPDATE: label:nth-of-type(4)::text "a" => "b"
UPDATE: label:nth-of-type(5)::text "b" => "c"
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

# Update `{"flip":false,"items":[{"key":"c"},{"key":"a"}]}`
```html
<label
  for="cM_a"
>
  other
</label>
<input
  id="cM_a"
/>
<section
  name="dynamic"
>
  <label
    for="cM_b"
  >
    content
  </label>
  <input
    id="cM_b"
  />
</section>
<label
  for="cM_5"
>
  c
</label>
<input
  id="cM_5"
/>
<label
  for="cM_6"
>
  a
</label>
<input
  id="cM_6"
/>
<section>
  <label
    for="cM_0"
  >
    forwarded
  </label>
  <input
    id="cM_0"
  />
</section>
<aside>
  <label
    for="cM_1"
  >
    forwarded
  </label>
  <input
    id="cM_1"
  />
</aside>
<label
  for="cM_2"
>
  nested
</label>
<input
  id="cM_2"
/>
```
## Change
```
INSERT: label, #cM_a
REMOVE: #cM_a + label
REMOVE: #cM_a + #cM_7
INSERT: #cM_a + section
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #cM_8
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #cM_9
UPDATE: section:nth-of-type(1)[name] null => "dynamic"
UPDATE: label:nth-of-type(2)::text "b" => "c"
UPDATE: label:nth-of-type(3)::text "c" => "a"
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
