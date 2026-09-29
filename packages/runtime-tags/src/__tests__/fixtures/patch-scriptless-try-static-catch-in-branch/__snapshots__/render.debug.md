# Render `{"show":false}`
```html
<main />
```

# Update `{"show":true,"promise":{}}`
```html
<main>
  <em>
    hi
  </em>
</main>
```
## Change
```
INSERT: main > em
```

# Update `{"show":true,"promise":{}}`
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
