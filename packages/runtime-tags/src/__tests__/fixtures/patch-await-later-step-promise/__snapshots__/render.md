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
  <i>
    loading
  </i>
</main>
```
## Change
```
INSERT: main > i
REMOVE: main > i + span
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
REMOVE: main > span + i
```
