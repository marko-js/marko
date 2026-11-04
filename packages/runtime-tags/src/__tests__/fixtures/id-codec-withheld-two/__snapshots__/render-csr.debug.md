# Render `{"prefix":"old"}`
```html
<button>
  toggle
</button>
<label
  for="cM_0"
>
  old cM_0
</label>
<input
  id="cM_0"
  title="old cM_0"
/>
<button>
  toggle
</button>
<label
  for="cM_1"
>
  old cM_1
</label>
<input
  id="cM_1"
  title="old cM_1"
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
UPDATE: label:nth-of-type(1)::text "old cM_0" => "next cM_0"
UPDATE: #cM_0[title] "old cM_0" => "next cM_0"
UPDATE: label:nth-of-type(2)::text "old cM_1" => "next cM_1"
UPDATE: #cM_1[title] "old cM_1" => "next cM_1"
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
REMOVE: button:nth-of-type(1) + #cM_0
REMOVE: button:nth-of-type(2) + label
REMOVE: button:nth-of-type(2) + #cM_1
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
  for="cM_2"
>
  next cM_2
</label>
<input
  id="cM_2"
  title="next cM_2"
/>
<button>
  toggle
</button>
<label
  for="cM_3"
>
  next cM_3
</label>
<input
  id="cM_3"
  title="next cM_3"
/>
```
## Change
```
INSERT: button:nth-of-type(1) + :is(label, #cM_2)
INSERT: button:nth-of-type(2) + :is(label, #cM_3)
UPDATE: label:nth-of-type(1)::text " " => "next cM_2"
UPDATE: #cM_2[title] null => "next cM_2"
UPDATE: label:nth-of-type(2)::text " " => "next cM_3"
UPDATE: #cM_3[title] null => "next cM_3"
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
  for="cM_2"
>
  after cM_2
</label>
<input
  id="cM_2"
  title="after cM_2"
/>
<button>
  toggle
</button>
<label
  for="cM_3"
>
  after cM_3
</label>
<input
  id="cM_3"
  title="after cM_3"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "next cM_2" => "after cM_2"
UPDATE: #cM_2[title] "next cM_2" => "after cM_2"
UPDATE: label:nth-of-type(2)::text "next cM_3" => "after cM_3"
UPDATE: #cM_3[title] "next cM_3" => "after cM_3"
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
