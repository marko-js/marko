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

```

# Mutations
```
inserted #text0
removed #text before #text
removed #text before #text
removed #text before #text0
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
removed #text before #text0
```