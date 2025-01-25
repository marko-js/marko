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

# Mutations
```
INSERT em, #text0, #text1, strong
```

# Render `{"value":"Some content"}`

```html
<em>
  Testing
</em>
Some content
```

# Mutations
```
INSERT #text1
REMOVE #text after #text1
REMOVE strong after #text1
```

# Render `{"value":"<div/>"}`

```html
<em>
  Testing
</em>
<div />
```

# Mutations
```
INSERT div
REMOVE #text after div
```