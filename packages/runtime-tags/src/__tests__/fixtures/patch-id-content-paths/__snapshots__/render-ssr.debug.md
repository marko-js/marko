# Render `{"flip":false,"items":[{"key":"a"},{"key":"b"}]}`
```html
<label
  for="sM_.#childScope/0@2.#childScope/0@0.uid"
>
  other
</label>
<input
  id="sM_.#childScope/0@2.#childScope/0@0.uid"
/>
<section
  name="dynamic"
>
  <label
    for="sM_.#text/1@4.#childScope/0@3.uid"
  >
    content
  </label>
  <input
    id="sM_.#text/1@4.#childScope/0@3.uid"
  />
</section>
<label
  for="sM_.#childScope/2@6[0].#text/0@1.#childScope/0@5.uid"
>
  a
</label>
<input
  id="sM_.#childScope/2@6[0].#text/0@1.#childScope/0@5.uid"
/>
<label
  for="sM_.#childScope/2@6[1].#text/0@1.#childScope/0@5.uid"
>
  b
</label>
<input
  id="sM_.#childScope/2@6[1].#text/0@1.#childScope/0@5.uid"
/>
<section>
  <label
    for="sM_.#childScope/3@8.#text/0@0.#childScope/0@7.uid"
  >
    forwarded
  </label>
  <input
    id="sM_.#childScope/3@8.#text/0@0.#childScope/0@7.uid"
  />
</section>
<aside>
  <label
    for="sM_.#childScope/3@8.#text/1@1.#childScope/0@7.uid"
  >
    forwarded
  </label>
  <input
    id="sM_.#childScope/3@8.#text/1@1.#childScope/0@7.uid"
  />
</aside>
<label
  for="sM_.#childScope/4@9.#childScope/0@0.#childScope/0@0.uid"
>
  nested
</label>
<input
  id="sM_.#childScope/4@9.#childScope/0@0.#childScope/0@0.uid"
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
  for="sM_.#childScope/0@2.#childScope/0@0.uid"
>
  first
</label>
<input
  id="sM_.#childScope/0@2.#childScope/0@0.uid"
/>
<label
  for="sM_.#text/1@4.uid"
>
  dynamic
</label>
<input
  id="sM_.#text/1@4.uid"
/>
<label
  for="sM_.#text/1@4.#text/3@0.#childScope/0@3.uid"
>
  content
</label>
<input
  id="sM_.#text/1@4.#text/3@0.#childScope/0@3.uid"
/>
<label
  for="sM_.#childScope/2@6[0].#text/0@1.#childScope/0@5.uid"
>
  b
</label>
<input
  id="sM_.#childScope/2@6[0].#text/0@1.#childScope/0@5.uid"
/>
<label
  for="sM_.#childScope/2@6[1].#text/0@1.#childScope/0@5.uid"
>
  c
</label>
<input
  id="sM_.#childScope/2@6[1].#text/0@1.#childScope/0@5.uid"
/>
<section>
  <label
    for="sM_.#childScope/3@8.#text/0@0.#childScope/0@7.uid"
  >
    forwarded
  </label>
  <input
    id="sM_.#childScope/3@8.#text/0@0.#childScope/0@7.uid"
  />
</section>
<aside>
  <label
    for="sM_.#childScope/3@8.#text/1@1.#childScope/0@7.uid"
  >
    forwarded
  </label>
  <input
    id="sM_.#childScope/3@8.#text/1@1.#childScope/0@7.uid"
  />
</aside>
<label
  for="sM_.#childScope/4@9.#childScope/0@0.#childScope/0@0.uid"
>
  nested
</label>
<input
  id="sM_.#childScope/4@9.#childScope/0@0.#childScope/0@0.uid"
/>
```
## Change
```
INSERT: label, #sM_.#childScope/0@2.#childScope/0@0.uid
REMOVE: #sM_.#childScope/0@2.#childScope/0@0.uid + label
REMOVE: #sM_.#childScope/0@2.#childScope/0@0.uid + #sM_.#childScope/0@2.#childScope/0@0.uid
INSERT: #sM_.#childScope/0@2.#childScope/0@0.uid + :is(label, #sM_.#text/1@4.uid)
REMOVE: #sM_.#text/1@4.#text/3@0.#childScope/0@3.uid + section
UPDATE: label:nth-of-type(2)[for] null => "sM_.#text/1@4.uid"
UPDATE: label:nth-of-type(2)::text " " => "dynamic"
UPDATE: #sM_.#text/1@4.uid[id] null => "sM_.#text/1@4.uid"
INSERT: #sM_.#text/1@4.uid + :is(label, #sM_.#text/1@4.#text/3@0.#childScope/0@3.uid)
UPDATE: label:nth-of-type(3)[for] null => "sM_.#text/1@4.#text/3@0.#childScope/0@3.uid"
UPDATE: label:nth-of-type(3)::text " " => "content"
UPDATE: #sM_.#text/1@4.#text/3@0.#childScope/0@3.uid[id] null => "sM_.#text/1@4.#text/3@0.#childScope/0@3.uid"
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
  for="sM_.#childScope/0@2.#childScope/0@0.uid"
>
  other
</label>
<input
  id="sM_.#childScope/0@2.#childScope/0@0.uid"
/>
<section
  name="dynamic"
>
  <label
    for="sM_.#text/1@4.#childScope/0@3.uid"
  >
    content
  </label>
  <input
    id="sM_.#text/1@4.#childScope/0@3.uid"
  />
</section>
<label
  for="sM_.#childScope/2@6[0].#text/0@1.#childScope/0@5.uid"
>
  c
</label>
<input
  id="sM_.#childScope/2@6[0].#text/0@1.#childScope/0@5.uid"
/>
<label
  for="sM_.#childScope/2@6[1].#text/0@1.#childScope/0@5.uid"
>
  a
</label>
<input
  id="sM_.#childScope/2@6[1].#text/0@1.#childScope/0@5.uid"
/>
<section>
  <label
    for="sM_.#childScope/3@8.#text/0@0.#childScope/0@7.uid"
  >
    forwarded
  </label>
  <input
    id="sM_.#childScope/3@8.#text/0@0.#childScope/0@7.uid"
  />
</section>
<aside>
  <label
    for="sM_.#childScope/3@8.#text/1@1.#childScope/0@7.uid"
  >
    forwarded
  </label>
  <input
    id="sM_.#childScope/3@8.#text/1@1.#childScope/0@7.uid"
  />
</aside>
<label
  for="sM_.#childScope/4@9.#childScope/0@0.#childScope/0@0.uid"
>
  nested
</label>
<input
  id="sM_.#childScope/4@9.#childScope/0@0.#childScope/0@0.uid"
/>
```
## Change
```
INSERT: label, #sM_.#childScope/0@2.#childScope/0@0.uid
REMOVE: #sM_.#childScope/0@2.#childScope/0@0.uid + label
REMOVE: #sM_.#childScope/0@2.#childScope/0@0.uid + #sM_.#childScope/0@2.#childScope/0@0.uid
INSERT: #sM_.#childScope/0@2.#childScope/0@0.uid + section
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #sM_.#text/1@4.uid
REMOVE: section:nth-of-type(1) + label
REMOVE: section:nth-of-type(1) + #sM_.#text/1@4.#text/3@0.#childScope/0@3.uid
UPDATE: section:nth-of-type(1)[name] null => "dynamic"
UPDATE: section:nth-of-type(1) > label[for] null => "sM_.#text/1@4.#childScope/0@3.uid"
UPDATE: section:nth-of-type(1) > label::text " " => "content"
UPDATE: #sM_.#text/1@4.#childScope/0@3.uid[id] null => "sM_.#text/1@4.#childScope/0@3.uid"
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
