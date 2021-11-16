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
<div />
```

# Mutations
```
removed #text, #text, #text, #text in div0
```


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
inserted div0/#text2
inserted div0/#text3
```