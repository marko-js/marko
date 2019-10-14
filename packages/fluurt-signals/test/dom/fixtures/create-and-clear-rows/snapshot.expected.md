# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
<div>
  abc
</div>
```

# Mutations
```
inserted #text0, div1, #text2
```


# Render {"children":[]}
```html
<div />
```

# Mutations
```
removed #text after div1/#text0
removed #text after div1/#text0
removed #text after div1/#text0
removed #text after div1/#text0
removed #text after div1/#text0
removed #text after div1/#text0
removed #text after div1/#text0
removed #text after div1/#text0
removed #text after div1/#text0
```


# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html
<div>
  abc
</div>
```

# Mutations
```
inserted div1/#text1
inserted div1/#text2
inserted div1/#text3
inserted div1/#text4
inserted div1/#text5
inserted div1/#text6
inserted div1/#text7
inserted div1/#text8
inserted div1/#text9
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
inserted div1/#text0
inserted div1/#text1
inserted div1/#text5
div1/#text2: "abc" => "a"
inserted div1/#text3
inserted div1/#text4
inserted div1/#text8
div1/#text5: "bc" => "b"
inserted div1/#text6
inserted div1/#text7
inserted div1/#text9
inserted div1/#text10
removed #comment after #text0
```