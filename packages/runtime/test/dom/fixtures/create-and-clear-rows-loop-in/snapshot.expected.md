# Render {"children":{"1":"a","2":"b","3":"c"}}
```html
<div>
  abc
</div>
```

# Mutations
```
inserted div0
```


# Render {"children":{}}
```html
<div />
```

# Mutations
```
removed #text before 
removed #text before 
removed #text before div0/#text0
```


# Render {"children":{"1":"a","2":"b","3":"c"}}
```html
<div>
  abc
</div>
```

# Mutations
```
inserted div0/#text0
inserted div0/#text1
inserted div0/#text2
div0/#text0: " " => "a"
div0/#text1: " " => "b"
div0/#text2: " " => "c"
```