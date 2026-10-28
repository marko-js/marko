# Render `{"a":{},"b":{}}`
```html
<main>
  <em>
    a1
  </em>
  <strong>
    b1
  </strong>
</main>
```

# Update `{"a":{"value":"a2"},"b":{"value":"b2"}}`
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
REMOVE: main > i + em
REMOVE: main > i + strong
```

# Update
```js
;
```

# Update `{"a":{"value":"a2"},"b":{"value":"b2"}}`

# Update
```js
;
```

# Update `{"a":{"value":"a2"},"b":{"value":"b2"}}`
```html
<main>
  <em>
    a2
  </em>
  <strong>
    b2
  </strong>
</main>
```
## Change
```
INSERT: main > :is(em, strong)
REMOVE: main > strong + i
```
