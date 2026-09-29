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

# Update `{"title":"third"}`
```html
<main>
  <button
    title="third"
  >
    go
  </button>
</main>
```
## Change
```
UPDATE: main > button[title] "second" => "third"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button
    data-seen="third"
    title="third"
  >
    go
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] null => "third"
```
