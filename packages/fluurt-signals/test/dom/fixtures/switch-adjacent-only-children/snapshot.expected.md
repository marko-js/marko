# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"}]}
```html
<div>
  ab
</div>
```

# Mutations
```
inserted #text0, div1, #text2
```


# Render {"children":[{"id":2,"text":"c"},{"id":1,"text":"d"}]}
```html
<div>
  cd
</div>
```

# Mutations
```
removed #text after div1/#text6
inserted div1/#text1
removed #text after div1/#text6
inserted div1/#text2
removed #text after div1/#text6
inserted div1/#text3
div1/#text5: "a" => "d"
div1/#text2: "b" => "c"
```


# Render {"children":[{"id":1,"text":"d"},{"id":2,"text":"c"}]}
```html
<div>
  dc
</div>
```

# Mutations
```
removed #text after div1/#text6
inserted div1/#text1
removed #text after div1/#text6
inserted div1/#text2
removed #text after div1/#text6
inserted div1/#text3
```


--- Hydrate ---
# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"}]}
```html
<div>
  ab
</div>
```

# Mutations
```
inserted div1/#text0
inserted div1/#text1
inserted div1/#text5
div1/#text2: "ab" => "a"
inserted div1/#text3
inserted div1/#text4
inserted div1/#text6
inserted div1/#text7
removed #comment after #text0
```