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
REMOVE: ::text("Hello ")
REMOVE: strong
INSERT: ::text("Some content")
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
REMOVE: ::text("Some content")
INSERT: div
```
