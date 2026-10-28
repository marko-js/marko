# Render `{"a":{"value":3},"b":{"value":4}}`
```html
<main />
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
INSERT: main > p
INSERT: main > p::text("3")
INSERT: main > p + span
INSERT: main > span::text("4")
```
