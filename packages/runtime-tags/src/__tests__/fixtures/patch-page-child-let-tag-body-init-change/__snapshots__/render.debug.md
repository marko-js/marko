# Render `{"alt":false,"more":false,"label":"a"}`

# Update `{"alt":false,"more":true,"label":"b"}`
```html
<em>
  b
</em>
```
## Change
```
INSERT: em
```

# Update `{"alt":true,"more":true,"label":"c"}`
## Console
```
ERROR Error: A patch renders a value of the <let> "tag" other than the one the page holds: its initial value changed.
```

## Patch rejected (navigate)
