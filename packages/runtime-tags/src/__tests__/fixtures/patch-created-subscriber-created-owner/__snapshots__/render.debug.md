# Render `{"show":false}`

# Update `{"show":true,"error":{},"label":"a"}`
```html
<div>
  <span>
    SHOWN_message1 a
  </span>
</div>
```
## Change
```
INSERT: div
```

# Update `{"show":true,"error":{},"label":"b"}`
```html
<div>
  <span>
    SHOWN_message1 b
  </span>
</div>
```
## Change
```
UPDATE: div > span::text@15 "a" => "b"
```

# Update `{"show":true,"label":"c"}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
