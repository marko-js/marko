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
    loading
  </i>
</main>
```
## Change
```
REMOVE: main > p
INSERT: main > i
REMOVE: main > i + span
```

# Update
```js
;
```

# Update `{"a":{"value":3},"b":{"value":4}}`
```html
<main>
  <span>
    4
  </span>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + i
```

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
INSERT: main > p
```
