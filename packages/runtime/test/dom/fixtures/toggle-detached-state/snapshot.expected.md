# Render {"value":{"name":"Jack"},"visible":true}
```html
<div>
  <span>
    Jack
  </span>
</div>
```

# Mutations
```
inserted div0
```


# Render {"visible":false}
```html
<div>
  <!---->
</div>
```

# Mutations
```
inserted div0/#comment0
removed span after div0/#comment0
```


# Render {"value":{"name":"Jake"},"visible":true}
```html
<div>
  <span>
    Jake
  </span>
</div>
```

# Mutations
```
inserted div0/span0
removed #comment after div0/span0
inserted div0/span0/#text0
```