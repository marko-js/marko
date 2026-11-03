# Render `{"flip":false,"items":[{"key":"a"},{"key":"b"}]}`
```html
<label
  for="sM_WUA"
>
  other
</label>
<input
  id="sM_WUA"
/>
<section
  name="dynamic"
>
  <label
    for="sM_YXA"
  >
    content
  </label>
  <input
    id="sM_YXA"
  />
</section>
<label
  for="sM__0VZA"
>
  a
</label>
<input
  id="sM__0VZA"
/>
<label
  for="sM__1VZA"
>
  b
</label>
<input
  id="sM__1VZA"
/>
<section>
  <label
    for="sM_-1U-0A"
  >
    forwarded
  </label>
  <input
    id="sM_-1U-0A"
  />
</section>
<aside>
  <label
    for="sM_-1V-0A"
  >
    forwarded
  </label>
  <input
    id="sM_-1V-0A"
  />
</aside>
<label
  for="sM_-2UUA"
>
  nested
</label>
<input
  id="sM_-2UUA"
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
  for="sM_WUA"
>
  first
</label>
<input
  id="sM_WUA"
/>
<label
  for="sM_YA"
>
  dynamic
</label>
<input
  id="sM_YA"
/>
<label
  for="sM_YUXA"
>
  content
</label>
<input
  id="sM_YUXA"
/>
<label
  for="sM__0VZA"
>
  b
</label>
<input
  id="sM__0VZA"
/>
<label
  for="sM__1VZA"
>
  c
</label>
<input
  id="sM__1VZA"
/>
<section>
  <label
    for="sM_-1U-0A"
  >
    forwarded
  </label>
  <input
    id="sM_-1U-0A"
  />
</section>
<aside>
  <label
    for="sM_-1V-0A"
  >
    forwarded
  </label>
  <input
    id="sM_-1V-0A"
  />
</aside>
<label
  for="sM_-2UUA"
>
  nested
</label>
<input
  id="sM_-2UUA"
/>
```
## Change
```
INSERT: label, #sM_WUA
REMOVE: #sM_WUA + label
REMOVE: #sM_WUA + #sM_WUA
INSERT: #sM_WUA + :is(label, #sM_YA)
REMOVE: #sM_YUXA + section
UPDATE: label:nth-of-type(2)[for] null => "sM_YA"
UPDATE: label:nth-of-type(2)::text " " => "dynamic"
UPDATE: #sM_YA[id] null => "sM_YA"
INSERT: #sM_YA + :is(label, #sM_YUXA)
UPDATE: label:nth-of-type(3)[for] null => "sM_YUXA"
UPDATE: label:nth-of-type(3)::text " " => "content"
UPDATE: #sM_YUXA[id] null => "sM_YUXA"
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
  for="sM_WUA"
>
  other
</label>
<input
  id="sM_WUA"
/>
<section
  name="dynamic"
>
  <label
    for="sM_YXA"
  >
    content
  </label>
  <input
    id="sM_YXA"
  />
</section>
<label
  for="sM__0VZA"
>
  c
</label>
<input
  id="sM__0VZA"
/>
<label
  for="sM__1VZA"
>
  a
</label>
<input
  id="sM__1VZA"
/>
<section>
  <label
    for="sM_-1U-0A"
  >
    forwarded
  </label>
  <input
    id="sM_-1U-0A"
  />
</section>
<aside>
  <label
    for="sM_-1V-0A"
  >
    forwarded
  </label>
  <input
    id="sM_-1V-0A"
  />
</aside>
<label
  for="sM_-2UUA"
>
  nested
</label>
<input
  id="sM_-2UUA"
/>
```
## Change
```
INSERT: label, #sM_WUA
REMOVE: #sM_WUA + label
REMOVE: #sM_WUA + #sM_WUA
INSERT: #sM_WUA + section
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #sM_YA
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #sM_YUXA
UPDATE: section:nth-of-type(1)[name] null => "dynamic"
UPDATE: section:nth-of-type(1) > label[for] null => "sM_YXA"
UPDATE: section:nth-of-type(1) > label::text " " => "content"
UPDATE: #sM_YXA[id] null => "sM_YXA"
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
