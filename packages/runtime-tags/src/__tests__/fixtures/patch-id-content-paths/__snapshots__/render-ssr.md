# Render `{"flip":false,"items":[{"key":"a"},{"key":"b"}]}`
```html
<label
  for="sM_VTA"
>
  other
</label>
<input
  id="sM_VTA"
/>
<section
  name="dynamic"
>
  <label
    for="sM_XWA"
  >
    content
  </label>
  <input
    id="sM_XWA"
  />
</section>
<label
  for="sM_Z0UYA"
>
  a
</label>
<input
  id="sM_Z0UYA"
/>
<label
  for="sM_Z1UYA"
>
  b
</label>
<input
  id="sM_Z1UYA"
/>
<section>
  <label
    for="sM_-0T_A"
  >
    forwarded
  </label>
  <input
    id="sM_-0T_A"
  />
</section>
<aside>
  <label
    for="sM_-0U_A"
  >
    forwarded
  </label>
  <input
    id="sM_-0U_A"
  />
</aside>
<label
  for="sM_-1TTA"
>
  nested
</label>
<input
  id="sM_-1TTA"
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
  for="sM_VTA"
>
  first
</label>
<input
  id="sM_VTA"
/>
<label
  for="sM_XA"
>
  dynamic
</label>
<input
  id="sM_XA"
/>
<label
  for="sM_XTWA"
>
  content
</label>
<input
  id="sM_XTWA"
/>
<label
  for="sM_Z0UYA"
>
  b
</label>
<input
  id="sM_Z0UYA"
/>
<label
  for="sM_Z1UYA"
>
  c
</label>
<input
  id="sM_Z1UYA"
/>
<section>
  <label
    for="sM_-0T_A"
  >
    forwarded
  </label>
  <input
    id="sM_-0T_A"
  />
</section>
<aside>
  <label
    for="sM_-0U_A"
  >
    forwarded
  </label>
  <input
    id="sM_-0U_A"
  />
</aside>
<label
  for="sM_-1TTA"
>
  nested
</label>
<input
  id="sM_-1TTA"
/>
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1) + #sM_VTA
REMOVE: #sM_VTA + label
REMOVE: #sM_VTA + #sM_VTA
INSERT: #sM_VTA + :is(label, #sM_XA)
REMOVE: #sM_XTWA + section
UPDATE: label:nth-of-type(2)[for] null => "sM_XA"
UPDATE: label:nth-of-type(2)::text " " => "dynamic"
UPDATE: #sM_XA[id] null => "sM_XA"
INSERT: #sM_XA + :is(label, #sM_XTWA)
UPDATE: label:nth-of-type(3)[for] null => "sM_XTWA"
UPDATE: label:nth-of-type(3)::text " " => "content"
UPDATE: #sM_XTWA[id] null => "sM_XTWA"
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
  for="sM_VTA"
>
  other
</label>
<input
  id="sM_VTA"
/>
<section
  name="dynamic"
>
  <label
    for="sM_XWA"
  >
    content
  </label>
  <input
    id="sM_XWA"
  />
</section>
<label
  for="sM_Z0UYA"
>
  c
</label>
<input
  id="sM_Z0UYA"
/>
<label
  for="sM_Z1UYA"
>
  a
</label>
<input
  id="sM_Z1UYA"
/>
<section>
  <label
    for="sM_-0T_A"
  >
    forwarded
  </label>
  <input
    id="sM_-0T_A"
  />
</section>
<aside>
  <label
    for="sM_-0U_A"
  >
    forwarded
  </label>
  <input
    id="sM_-0U_A"
  />
</aside>
<label
  for="sM_-1TTA"
>
  nested
</label>
<input
  id="sM_-1TTA"
/>
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1) + #sM_VTA
REMOVE: #sM_VTA + label
REMOVE: #sM_VTA + #sM_VTA
INSERT: #sM_VTA + section
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #sM_XA
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #sM_XTWA
UPDATE: section:nth-of-type(1)[name] null => "dynamic"
UPDATE: section:nth-of-type(1) > label[for] null => "sM_XWA"
UPDATE: section:nth-of-type(1) > label::text " " => "content"
UPDATE: #sM_XWA[id] null => "sM_XWA"
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
