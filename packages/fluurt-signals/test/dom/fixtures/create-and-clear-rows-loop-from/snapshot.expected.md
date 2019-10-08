# Render {"from":0,"to":3,"step":1}
```html
<div>
  0123
</div>
```

# Mutations
```
inserted div0
```


# Render {"from":0,"to":-1,"step":1}
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
removed #text after div0/#text0
removed #text after div0/#text0
removed #text after div0/#text0
```


# Render {"from":0,"to":3,"step":1}
```html
<div>
  0123
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
inserted div0/#text10
inserted div0/#text11
inserted div0/#text12
```


--- Hydrate ---
# Render {"from":0,"to":3,"step":1}
```html
<div>
  0123
</div>
```

# Mutations
```
inserted div0/#text0
inserted div0/#text1
inserted div0/#text5
div0/#text2: "0123" => "0"
inserted div0/#text3
inserted div0/#text4
inserted div0/#text8
div0/#text5: "123" => "1"
inserted div0/#text6
inserted div0/#text7
inserted div0/#text11
div0/#text8: "23" => "2"
inserted div0/#text9
inserted div0/#text10
inserted div0/#text12
inserted div0/#text13
removed #comment before div0
```