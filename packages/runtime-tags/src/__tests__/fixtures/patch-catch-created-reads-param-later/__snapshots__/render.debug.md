# Render `{"msg":"a"}`
```html
<p>
  a
</p>
```

# Update `{"fail":true,"msg":"b"}`
```html
<b>
  b b
</b>
```
## Change
```
INSERT: b
REMOVE: b + p
UPDATE: b::text@0 "" => "b"
UPDATE: b::text@2 "" => "b"
```

# Update `{"fail":true,"msg":"c"}`
```html
<b>
  b c
</b>
```
## Change
```
UPDATE: b::text@2 "b" => "c"
```

# Update `{"msg":"d"}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
