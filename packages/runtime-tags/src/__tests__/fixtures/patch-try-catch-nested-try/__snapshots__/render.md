# Render `{"promise":{}}`
```html
<main>
  <em>
    ok
  </em>
  <strong>
    v1
  </strong>
</main>
```

# Update `{"promise":{}}`
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

# Update `{"promise":{}}`
