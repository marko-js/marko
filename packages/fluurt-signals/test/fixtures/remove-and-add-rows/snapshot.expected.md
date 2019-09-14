# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
<div>
  abc
</div>
```

# Mutations
```
inserted div0
```


# Render {"children":[{"id":1,"text":"a"},{"id":3,"text":"c"}]}
```html
<div>
  ac
</div>
```

# Mutations
```
removed #text after div0/#text3
removed #text after div0/#text3
removed #text after div0/#text3
```


# Render {"children":[{"id":4,"text":"d"},{"id":3,"text":"c"}]}
```html
<div>
  dc
</div>
```

# Mutations
```
removed #text after div0/#text0
removed #text after div0/#text0
removed #text after div0/#text0
inserted div0/#text1
inserted div0/#text2
inserted div0/#text3
```