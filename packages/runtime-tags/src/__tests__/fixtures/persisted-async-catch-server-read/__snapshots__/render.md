# Render `{"promise":{},"title":"first"}`
```html
<main>
  <em>
    ok
  </em>
</main>
```

# Update `{"promise":{},"title":"second"}`
```html
<main>
  <em>
    second
  </em>
</main>
```
## Change
```
INSERT: main > em
REMOVE: main > em + em
```
