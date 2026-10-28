# Render `{"promise":{}}`
```html
<main>
  <div
    class="ld"
  >
    <em>
      one
    </em>
  </div>
</main>
```

# Update `{"promise":{}}`
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
REMOVE: main > b + div
UPDATE: main > b::text " " => "boom"
```

# Update `{"promise":{}}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
