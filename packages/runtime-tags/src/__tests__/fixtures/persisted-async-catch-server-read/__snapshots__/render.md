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

# Update `{"promise":{},"title":"third"}`
```html
<main>
  <em>
    third
  </em>
</main>
```
## Change
```
INSERT: main > em
REMOVE: #document-fragment > em + em
INSERT: main > em
REMOVE: main > em + em
```
