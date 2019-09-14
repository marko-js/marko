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


# Render {"children":[{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":1,"text":"a"}]}
```html
<div>
  bca
</div>
```

# Mutations
```
removed #text after div0/#text0
inserted div0/#text7
removed #text after div0/#text0
inserted div0/#text8
removed #text after div0/#text0
inserted div0/#text9
```


# Render {"children":[]}
```html
<div>
</div>
```

# Mutations
```
removed #text after div0/#text0
removed #text after div0/#text0
removed #text after div0/#text0
removed #text after div0/#text0
removed #text after div0/#text0
removed #text after div0/#text0
removed #text after div0/#text0
removed #text after div0/#text0
removed #text after div0/#text0
```