# Render `{"a":{"value":3},"b":{"value":4}}`
```html
<main>
  <i>
    outer
  </i>
</main>
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
INSERT: t > span::text("4")
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
INSERT: main > p::text("3")
REMOVE: main > i
INSERT: main > :is(p, span)
```
