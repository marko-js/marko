# Render `{"promise":{}}`
```html
<main>
  <p>
    oops
  </p>
</main>
```

# Update `{"promise":{}}`
```html
<main>
  <em>
    hi
  </em>
</main>
```
## Change
```
REMOVE: main > em + p
INSERT: main > em
```

# Update `{"promise":{}}`
```html
<main>
  <p>
    oops
  </p>
</main>
```
## Change
```
INSERT: main > p
REMOVE: main > p + em
```
