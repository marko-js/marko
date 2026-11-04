# Render `{"a":{"value":3},"b":{"value":4}}`
```html
<main />
```

# Update
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
```

# Update
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
