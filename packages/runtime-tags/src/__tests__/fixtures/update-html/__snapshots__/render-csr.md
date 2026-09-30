# Render `{"value":"Hello <strong>World</strong>"}`
```html
<em>
  Testing
</em>
Hello
<strong>
  World
</strong>
```

# Update `{"value":"Some content"}`
```html
<em>
  Testing
</em>
Some content
```
## Change
```
INSERT: ::text@0 + ::text("Some content")
REMOVE: ::text@1 + ::text("Hello ")
REMOVE: ::text@1 + strong
```

# Update `{"value":"<div/>"}`
```html
<em>
  Testing
</em>
<div />
```
## Change
```
INSERT: ::text + div
REMOVE: div + ::text("Some content")
```
