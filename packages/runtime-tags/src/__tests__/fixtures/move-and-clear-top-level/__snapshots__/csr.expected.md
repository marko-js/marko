# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
<!---->
abc
<!---->
```

# Mutations
```
inserted #comment0, #text1, #text2, #text3, #comment4
```


# Render {"children":[]}
```html
<!---->
<!---->
```

# Mutations
```
inserted #text1
removed #text after #comment0
removed #text after #comment0
removed #text after #comment0
```


# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
<!---->
abc
<!---->
```

# Mutations
```
inserted #text1
inserted #text2
inserted #text3
removed #text after #comment0
```