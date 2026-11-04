# Render `{"on":false,"note":"a","w":{"value":"x"}}`
```html
<main>
  <div />
</main>
```

# Update `{"on":true,"note":"b","w":{"value":"y"}}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
</main>
```
## Change
```
INSERT: main > .toggle
REMOVE: .toggle + div
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```

# Update `{"on":true,"note":"c","w":{"value":"z"}}`
