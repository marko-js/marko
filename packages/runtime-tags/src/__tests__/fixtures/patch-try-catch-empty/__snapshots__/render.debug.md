# Render `{"promise":{}}`
```html
<main>
  <em>
    hi
  </em>
  <button>
    0
  </button>
</main>
```

# Update `{"promise":{"value":{}}}`
```html
<main>
  <button>
    0
  </button>
</main>
```
## Change
```
REMOVE: main > em
```

# Update `{"promise":{}}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
