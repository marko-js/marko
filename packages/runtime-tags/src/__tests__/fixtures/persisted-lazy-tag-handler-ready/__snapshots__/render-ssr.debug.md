# Render `{"title":"first"}`
```html
<main>
  <button
    title="first"
  >
    go
  </button>
</main>
```

# Update
```js
setTimeout(() => document.body.click());
```

# Update `{"title":"second"}`
```html
<main>
  <button
    title="second"
  >
    go
  </button>
</main>
```
## Change
```
UPDATE: main > button[title] "first" => "second"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button
    data-seen="second"
    title="second"
  >
    go
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] null => "second"
```
