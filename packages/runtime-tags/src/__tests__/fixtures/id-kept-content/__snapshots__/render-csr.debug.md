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
UPDATE: label::text "old cM_0" => "next cM_0"
UPDATE: #cM_0[title] "old cM_0" => "next cM_0"
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
REMOVE: button + #cM_0
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
INSERT: button + :is(label, #cM_1)
UPDATE: label::text " " => "next cM_1"
UPDATE: #cM_1[title] null => "next cM_1"
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
UPDATE: label::text "next cM_1" => "after cM_1"
UPDATE: #cM_1[title] "next cM_1" => "after cM_1"
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
assert(input.title.endsWith(" " + input.id), input.title + " / " + input.id);
assert.equal(input.labels [0].textContent, input.title);
```
