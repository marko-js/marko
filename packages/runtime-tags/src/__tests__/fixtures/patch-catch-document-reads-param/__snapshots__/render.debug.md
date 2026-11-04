# Render `{"error":{},"label":"a"}`
```html
<b>
  SHOWN_one a
</b>
```

# Update `{"error":{},"label":"b"}`
```html
<b>
  SHOWN_one b
</b>
```
## Change
```
UPDATE: b::text@10 "a" => "b"
```

# Update `{"label":"c"}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
