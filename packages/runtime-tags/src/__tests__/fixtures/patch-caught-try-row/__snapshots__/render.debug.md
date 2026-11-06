# Render `{"rows":[{"key":1,"fail":true}]}`
```html
<main>
  Unavailable 1
</main>
```

# Update `{"rows":[{"key":1,"fail":true},{"key":2}]}`
```html
<main>
  Unavailable 1
  <p>
    2
  </p>
</main>
```
## Change
```
INSERT: main::text + p
```

# Update `{"rows":[{"key":1,"fail":true},{"key":3,"fail":true}]}`
```html
<main>
  Unavailable 1Unavailable 3
</main>
```
## Change
```
REMOVE: main::text@0 + p
INSERT: main::text@0 + :is(::text("Unavailable "), ::text("3"))
UPDATE: main::text@25 "" => "3"
```

# Update `{"rows":[{"key":1},{"key":3,"fail":true}]}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
