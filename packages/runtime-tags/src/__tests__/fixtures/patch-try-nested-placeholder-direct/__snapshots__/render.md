# Render `{"promise":{"value":"a"}}`
```html
<main>
  inner
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
REMOVE: main::text("inner")
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
INSERT: main::text("inner")
REMOVE: ::text + span
INSERT: main > span
REMOVE: main > span + ::text("inner")
```
