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


# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
<div>
  abc
</div>
```

# Mutations
```
inserted div0/#text1
inserted div0/#text2
inserted div0/#text3
inserted div0/#text4
inserted div0/#text5
inserted div0/#text6
inserted div0/#text7
inserted div0/#text8
inserted div0/#text9
```


--- Hydrate ---
# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
<div>
  abc
</div>
```

# Mutations
```
inserted div0/#text0
inserted div0/#text1
div0/#text2: "abc" => "a"
inserted div0/#text3
inserted div0/#text4
inserted div0/#text5
inserted div0/#text6
inserted div0/#text7
inserted div0/#text8
inserted div0/#text9
inserted div0/#text10
removed #comment before div0
```