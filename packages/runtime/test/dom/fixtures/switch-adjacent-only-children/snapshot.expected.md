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
removed #text after div0/#text1
inserted div0/#text0
div0/#text1: "a" => "d"
div0/#text0: "b" => "c"
```


# Render {"children":[{"id":1,"text":"d"},{"id":2,"text":"c"}]}
```html
<div>
  dc
</div>
```

# Mutations
```
removed #text after div0/#text1
inserted div0/#text0
```