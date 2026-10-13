# Render `{"show":false,"title":"a"}`

# Update `{"show":true,"title":"b"}`

# Update
```js
document.body.click();
```

# Update
```html
<main>
  <button
    title="b"
  >
    go
  </button>
</main>
```
## Change
```
INSERT: main
```

# Update Release

# Update `{"show":false,"title":"b"}`
## Change
```
REMOVE: main
```

# Update `{"show":true,"title":"c"}`
```html
<main>
  <button
    title="c"
  >
    go
  </button>
</main>
```
## Change
```
INSERT: main
```

# Update
```js
const button = document.querySelector("button");
button.click();
assert.equal(button.dataset.seen, "c");
```
```html
<main>
  <button
    data-seen="c"
    title="c"
  >
    go
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] null => "c"
```
