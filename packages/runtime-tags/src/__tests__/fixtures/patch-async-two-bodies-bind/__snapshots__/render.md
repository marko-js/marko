# Render `{"first":{},"second":{}}`
```html
<main>
  <em>
    a1
  </em>
  <button
    title="b1"
  >
    b1
  </button>
</main>
```

# Update
```js
const button = document.querySelector("button");
button.click();
assert.equal(button.dataset.seen, button.title);
```
```html
<main>
  <em>
    a1
  </em>
  <button
    data-seen="b1"
    title="b1"
  >
    b1
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] null => "b1"
```

# Update `{"first":{"value":"a2"},"second":{"value":"b2"}}`
```html
<main>
  <em>
    a2
  </em>
  <button
    title="b2"
  >
    b2
  </button>
</main>
```
## Change
```
REMOVE: main > em
REMOVE: main > button
INSERT: main > em
INSERT: main > em + button
```

# Update
```js
const button = document.querySelector("button");
button.click();
assert.equal(button.dataset.seen, button.title);
```
```html
<main>
  <em>
    a2
  </em>
  <button
    data-seen="b2"
    title="b2"
  >
    b2
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] null => "b2"
```
