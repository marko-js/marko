# Render `{"promise":{}}`
```html
<main>
  <em>
    hi
  </em>
</main>
```

# Update `{"promise":{}}`
```html
<main>
  <em>
    boom
  </em>
</main>
```
## Change
```
INSERT: main::text("loading")
REMOVE:  + em
INSERT: main > em
REMOVE: main > em + ::text("loading")
```
