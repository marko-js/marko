# Render {"from":0,"to":3,"step":1}
```html
<div>
  0123
</div>
```

# Mutations
```
inserted #text0, div1, #text2
```


# Render {"from":0,"to":-1,"step":1}
```html
<div>
</div>
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
removed #text after div1/#text0
removed #text after div1/#text0
removed #text after div1/#text0
```


# Render {"from":0,"to":3,"step":1}
```html
<div>
  0123
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
inserted div1/#text10
inserted div1/#text11
inserted div1/#text12
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
inserted div1/#text0
inserted div1/#text1
inserted div1/#text5
div1/#text2: "0123" => "0"
inserted div1/#text3
inserted div1/#text4
inserted div1/#text8
div1/#text5: "123" => "1"
inserted div1/#text6
inserted div1/#text7
inserted div1/#text11
div1/#text8: "23" => "2"
inserted div1/#text9
inserted div1/#text10
inserted div1/#text12
inserted div1/#text13
removed #comment after #text0
```