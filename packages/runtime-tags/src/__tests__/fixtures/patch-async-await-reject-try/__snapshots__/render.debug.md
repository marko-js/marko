# Render `{"promise":{}}`
```html
<main>
  <em>
    hi
  </em>
</main>
```

# Update `{"promise":{"value":{}}}`
```html
<main>
  <em>
    boom
  </em>
</main>
```
## Change
```
INSERT: main > em
REMOVE: main > em + em
```
