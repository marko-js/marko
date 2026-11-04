# Render `{"page":"a","promise":{}}`
```html
<main>
  <h1>
    A
  </h1>
</main>
```

# Update `{"page":"b","promise":{"value":"slow"}}`
```html
<main>
  <button>
    go
  </button>
  <p>
    slow
  </p>
</main>
```
## Change
```
INSERT: main > button
REMOVE: main > p + h1
INSERT: main > button + ::text("Loading")
INSERT: main > button + p
REMOVE: main > p + ::text("Loading")
```

# Update `{"page":"a","promise":{}}`
```html
<main>
  <h1>
    A
  </h1>
</main>
```
## Change
```
INSERT: main > h1
REMOVE: main > h1 + button
REMOVE: main > h1 + p
```
