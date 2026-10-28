# Render `{"boom":false}`
```html
<main>
  <em>
    ok
  </em>
</main>
```

# Update `{"boom":true}`
```html
<main>
  <b>
    boom
  </b>
</main>
```
## Change
```
INSERT: main > b
REMOVE: main > b + em
UPDATE: main > b::text " " => "boom"
```

# Update `{"boom":false}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
