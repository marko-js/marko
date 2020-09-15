# Render {"value":"Hello <strong>World</strong>"}
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
inserted em0, #text1, #text2, strong3, #text4
```


# Render {"value":"Some content"}
```html
<em>
  Testing
</em>
Some content
```

# Mutations
```
inserted #text2
removed #text after #text1
removed strong after #text1
```


# Render {"value":"<div/>"}
```html
<em>
  Testing
</em>
<div />
```

# Mutations
```
inserted div2
removed #text after #text1
```