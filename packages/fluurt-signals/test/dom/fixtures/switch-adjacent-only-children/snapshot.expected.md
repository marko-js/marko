# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"}]}
```html
<div>
  ab
</div>
```

# Mutations
```
inserted div0
```


# Render {"children":[{"id":2,"text":"c"},{"id":1,"text":"d"}]}
```html
<div>
  cd
</div>
```

# Mutations
```
removed #text after div0/#text6
inserted div0/#text1
removed #text after div0/#text6
inserted div0/#text2
removed #text after div0/#text6
inserted div0/#text3
div0/#text5: "a" => "d"
div0/#text2: "b" => "c"
```


# Render {"children":[{"id":1,"text":"d"},{"id":2,"text":"c"}]}
```html
<div>
  dc
</div>
```

# Mutations
```
removed #text after div0/#text6
inserted div0/#text1
removed #text after div0/#text6
inserted div0/#text2
removed #text after div0/#text6
inserted div0/#text3
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
inserted div0/#text0
inserted div0/#text1
inserted div0/#text5
div0/#text2: "ab" => "a"
inserted div0/#text3
inserted div0/#text4
inserted div0/#text6
inserted div0/#text7
removed #comment before div0
```