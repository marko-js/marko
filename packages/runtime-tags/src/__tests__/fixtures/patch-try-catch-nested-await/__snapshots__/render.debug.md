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

# Update `{"a":{},"b":{}}`
```html
<main>
  <span>
    boom
  </span>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + em
REMOVE: main > span + strong
UPDATE: main > span::text " " => "boom"
```

# Update `{"a":{},"b":{}}`
