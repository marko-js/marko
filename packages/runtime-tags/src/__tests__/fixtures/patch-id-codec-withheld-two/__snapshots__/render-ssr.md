# Render `{"prefix":"old"}`
```html
<button>
  toggle
</button>
<label
  for="sM_UUA"
>
  old sM_UUA
</label>
<input
  id="sM_UUA"
  title="old sM_UUA"
/>
<button>
  toggle
</button>
<label
  for="sM_VUB"
>
  old sM_VUB
</label>
<input
  id="sM_VUB"
  title="old sM_VUB"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(input.labels [0].textContent, input.title);
  assert(input.title.endsWith(" " + input.id));
assert.equal(ids.size, 2);
}
```

# Update `{"prefix":"next"}`
```html
<button>
  toggle
</button>
<label
  for="sM_UUA"
>
  next sM_UUA
</label>
<input
  id="sM_UUA"
  title="next sM_UUA"
/>
<button>
  toggle
</button>
<label
  for="sM_VUB"
>
  next sM_VUB
</label>
<input
  id="sM_VUB"
  title="next sM_VUB"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "old sM_UUA" => "next sM_UUA"
UPDATE: #sM_UUA[title] "old sM_UUA" => "next sM_UUA"
UPDATE: label:nth-of-type(2)::text "old sM_VUB" => "next sM_VUB"
UPDATE: #sM_VUB[title] "old sM_VUB" => "next sM_VUB"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(input.labels [0].textContent, input.title);
  assert(input.title.endsWith(" " + input.id));
assert.equal(ids.size, 2);
}
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button>
  toggle
</button>
<button>
  toggle
</button>
```
## Change
```
REMOVE: button:nth-of-type(1) + label
REMOVE: button:nth-of-type(1) + #sM_UUA
REMOVE: button:nth-of-type(2) + label
REMOVE: button:nth-of-type(2) + #sM_VUB
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button>
  toggle
</button>
<label
  for="cM_0"
>
  next cM_0
</label>
<input
  id="cM_0"
  title="next cM_0"
/>
<button>
  toggle
</button>
<label
  for="cM_1"
>
  next cM_1
</label>
<input
  id="cM_1"
  title="next cM_1"
/>
```
## Change
```
INSERT: button:nth-of-type(1) + :is(label, #cM_0)
INSERT: button:nth-of-type(2) + :is(label, #cM_1)
UPDATE: label:nth-of-type(1)::text " " => "next cM_0"
UPDATE: #cM_0[title] null => "next cM_0"
UPDATE: label:nth-of-type(2)::text " " => "next cM_1"
UPDATE: #cM_1[title] null => "next cM_1"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(input.labels [0].textContent, input.title);
  assert(input.title.endsWith(" " + input.id));
assert.equal(ids.size, 2);
}
```

# Update `{"prefix":"after"}`
```html
<button>
  toggle
</button>
<label
  for="cM_0"
>
  after cM_0
</label>
<input
  id="cM_0"
  title="after cM_0"
/>
<button>
  toggle
</button>
<label
  for="cM_1"
>
  after cM_1
</label>
<input
  id="cM_1"
  title="after cM_1"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "next cM_0" => "after cM_0"
UPDATE: #cM_0[title] "next cM_0" => "after cM_0"
UPDATE: label:nth-of-type(2)::text "next cM_1" => "after cM_1"
UPDATE: #cM_1[title] "next cM_1" => "after cM_1"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(input.labels [0].textContent, input.title);
  assert(input.title.endsWith(" " + input.id));
assert.equal(ids.size, 2);
}
```
