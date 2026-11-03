# Render `{"on":true,"note":"a","w":{"value":"x"}}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
</main>
```

# Update
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    a x
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
INSERT: main > em::text("a x")
```
