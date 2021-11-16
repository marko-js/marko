# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
abc
```

# Mutations
```
inserted #text0, #text1, #text2
```


# Render {"children":[]}
```html
<!---->
```

# Mutations
```
inserted #comment0
removed #text before #text
removed #text before #text
removed #text before #comment0
```


# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
abc
```

# Mutations
```
inserted #text0
inserted #text1
inserted #text2
removed #comment before #text0
```