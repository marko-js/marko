# Render {"visible":false,"value":"Hi"}
```html
<div>
  <!---->
</div>
```

# Mutations
```
inserted div0
```


# Render {"visible":true,"value":"Hi"}
```html
<div>
  <span>
    Hi
  </span>
</div>
```

# Mutations
```
inserted div0/span0
removed #comment after div0/span0
inserted div0/span0/#text0
```


# Render {"visible":true,"value":"Bye"}
```html
<div>
  <span>
    Bye
  </span>
</div>
```

# Mutations
```
removed #text in div0/span0
inserted div0/span0/#text0
```