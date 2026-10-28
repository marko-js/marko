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
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
assert(input.title.endsWith(" " + input.id), input.title + " / " + input.id);
assert.equal(input.labels [0].textContent, input.title);
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
```
## Change
```
UPDATE: label::text "old sM_UUA" => "next sM_UUA"
UPDATE: #sM_UUA[title] "old sM_UUA" => "next sM_UUA"
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
assert(input.title.endsWith(" " + input.id), input.title + " / " + input.id);
assert.equal(input.labels [0].textContent, input.title);
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + label
REMOVE: button + #sM_UUA
```

# Update
```js
document.querySelector("button").click();
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
```
## Change
```
INSERT: button + :is(label, #cM_0)
UPDATE: label::text " " => "next cM_0"
UPDATE: #cM_0[title] null => "next cM_0"
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
assert(input.title.endsWith(" " + input.id), input.title + " / " + input.id);
assert.equal(input.labels [0].textContent, input.title);
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
```
## Change
```
UPDATE: label::text "next cM_0" => "after cM_0"
UPDATE: #cM_0[title] "next cM_0" => "after cM_0"
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
assert(input.title.endsWith(" " + input.id), input.title + " / " + input.id);
assert.equal(input.labels [0].textContent, input.title);
```
