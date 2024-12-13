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
removed div0/#text2 before div0/#text0
inserted div0/#text2
```


# Render {"children":[]}
```html
<div />
```

# Mutations
```
removed #text, #text, #text in div0
```