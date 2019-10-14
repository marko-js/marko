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
inserted #text0, em1, #text2, #text3, #text4, strong5, #text6, #text7
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
removed #text after #text3
removed strong after #text3
inserted #text4
```


# Render {"value":"<div/>"}
```html
<em>
  Testing
</em>
<div>
</div>
```

# Mutations
```
removed #text after #text3
inserted div4
```