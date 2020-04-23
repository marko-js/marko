# Render {"children":{"1":"a","2":"b","3":"c"}}
```html
<div>
  abc
</div>
```

# Mutations
```
inserted #text0, div1, #text2
```


# Render {"children":{}}
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
removed #text before div1/#text0
```


# Render {"children":{"1":"a","2":"b","3":"c"}}
```html
<div>
  abc
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
```


--- Hydrate ---
# Render {"children":{"1":"a","2":"b","3":"c"}}
```html
<div>
  abc
</div>
```

# Mutations
```
inserted div1/#text0
inserted div1/#text4
div1/#text1: "abc" => "a"
inserted div1/#text2
inserted div1/#text3
inserted div1/#text7
div1/#text4: "bc" => "b"
inserted div1/#text5
inserted div1/#text6
inserted div1/#text8
inserted div1/#text9
removed #comment after #text0
removed #comment after div1
```