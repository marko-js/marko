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
removed #text, #text, #text in div0
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
```