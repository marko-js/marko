# Render `{"big":false,"more":false,"label":"a"}`

# Update `{"big":false,"more":true,"label":"b"}`
```html
<section>
  <em>
    b
  </em>
</section>
```
## Change
```
INSERT: section
```

# Update `{"big":false,"more":false,"label":"c"}`
## Change
```
REMOVE: section
```

# Update `{"big":true,"more":true,"label":"d"}`
## Console
```
ERROR Error: A patch renders a value of the <let> "T" other than the one the page holds: its initial value changed.
```

## Patch rejected (navigate)
