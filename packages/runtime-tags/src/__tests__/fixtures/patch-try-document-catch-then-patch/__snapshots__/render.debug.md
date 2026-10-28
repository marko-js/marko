# Render `{"message":"x","boom":true}`
```html
<main>
  <b>
    boom
  </b>
</main>
```

# Update `{"message":"y","boom":true}`

# Update `{"message":"ok"}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
