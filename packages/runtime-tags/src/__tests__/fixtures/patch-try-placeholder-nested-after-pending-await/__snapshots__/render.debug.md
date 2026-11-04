# Render `{"a":{},"b":{}}`
```html
<main>
  <p>
    1
  </p>
  <span>
    2
  </span>
</main>
```

# Update `{"a":{"value":3},"b":{"value":4}}`
```html
<main>
  <i>
    outer
  </i>
</main>
```
## Change
```
INSERT: main > i
REMOVE: main > i + p
REMOVE: main > i + span
```

# Update
```js
;
```

# Update `{"a":{"value":3},"b":{"value":4}}`

# Update
```js
;
```

# Update `{"a":{"value":3},"b":{"value":4}}`
```html
<main>
  <p>
    3
  </p>
  <span>
    4
  </span>
</main>
```
## Change
```
INSERT: main > :is(p, span)
REMOVE: main > span + i
```
