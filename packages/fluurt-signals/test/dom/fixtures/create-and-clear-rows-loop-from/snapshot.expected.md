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
<div />
```

# Mutations
```
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before div1/#text0
```


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
inserted div1/#text4
div1/#text1: "0123" => "0"
inserted div1/#text2
inserted div1/#text3
inserted div1/#text7
div1/#text4: "123" => "1"
inserted div1/#text5
inserted div1/#text6
inserted div1/#text10
div1/#text7: "23" => "2"
inserted div1/#text8
inserted div1/#text9
inserted div1/#text11
inserted div1/#text12
removed #comment after #text0
removed #comment after div1
```