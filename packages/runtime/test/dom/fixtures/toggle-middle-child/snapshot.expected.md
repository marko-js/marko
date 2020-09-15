# Render {"value":"Hello"}
```html
<div>
  <span />
  <span>
    Hello
  </span>
  <span />
</div>
```

# Mutations
```
inserted div0
```


# Render {"value":false}
```html
<div>
  <span />
  <span />
</div>
```

# Mutations
```
removed span after div0/span0
```


# Render {"value":"World"}
```html
<div>
  <span />
  <span>
    World
  </span>
  <span />
</div>
```

# Mutations
```
inserted div0/span1
inserted div0/span1/#text0
```


# Render {"value":"!"}
```html
<div>
  <span />
  <span>
    !
  </span>
  <span />
</div>
```

# Mutations
```
removed #text in div0/span1
inserted div0/span1/#text0
```