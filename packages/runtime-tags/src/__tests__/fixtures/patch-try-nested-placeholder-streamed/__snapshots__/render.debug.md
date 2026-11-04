# Render `{"promise":{}}`
```html
<main>
  <span>
    a
  </span>
</main>
```

# Update `{"promise":{"value":"b"}}`
```html
<main>
  inner
</main>
```
## Change
```
INSERT: main::text("inner")
REMOVE: main::text + span
```

# Update
```js
;
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
INSERT: main > span
REMOVE: main > span + ::text("inner")
```
