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
<main />
```
## Change
```
REMOVE: main > em
```

# Update `{"promise":{}}`
```html
<main>
  <em>
    back
  </em>
</main>
```
## Change
```
INSERT: main > em
```
