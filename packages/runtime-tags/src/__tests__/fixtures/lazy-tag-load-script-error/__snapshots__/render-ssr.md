# Render `{"label":"a"}`
```html
<main>
  <button>
    a:0
  </button>
</main>
```

# Update
```js
setTimeout(() => document.body.click());
```

# Update
```html
<main>
  <div
    id="error"
  >
    failed
  </div>
</main>
```
## Change
```
INSERT: main > #error
REMOVE: #error + button
```
