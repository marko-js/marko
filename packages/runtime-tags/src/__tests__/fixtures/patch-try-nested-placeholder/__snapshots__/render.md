# Render `{"promise":{"value":"a"}}`
```html
<main>
  loading
</main>
```

# Update
```html
<main>
  <span>
    a
  </span>
</main>
```
## Change
```
INSERT: main > span::text("a")
REMOVE: main::text("loading")
INSERT: main > span
```

# Update `{"promise":{"value":"b"}}`
```html
<main>
  <span>
    b
  </span>
</main>
```
## Change
```
INSERT: main::text("loading")
REMOVE: ::text + span
INSERT: main > span
REMOVE: main > span + ::text("loading")
```
