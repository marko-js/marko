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
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
