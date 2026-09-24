# Render `{"title":"a"}`
```html
<main>
  <button
    title="a"
  >
    go
  </button>
</main>
```

# Update `{"title":"b"}`

# Update `{"title":"c"}`

# Update
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
UPDATE: main > button[title] "a" => "c"
```

# Update Release

# Update
```js
document.querySelector("button").click();
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
