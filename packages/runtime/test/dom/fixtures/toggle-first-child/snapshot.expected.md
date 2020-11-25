# Render {"value":"Hello"}
```html
<div>
  <span>
    Hello
  </span>
  <span />
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
  <!---->
  <span />
  <span />
</div>
```

# Mutations
```
inserted div0/#comment0
removed span after div0/#comment0
```


# Render {"value":"World"}
```html
<div>
  <span>
    World
  </span>
  <span />
  <span />
</div>
```

# Mutations
```
inserted div0/span0
removed #comment after div0/span0
inserted div0/span0/#text0
```


# Render {"value":"!"}
```html
<div>
  <span>
    !
  </span>
  <span />
  <span />
</div>
```

# Mutations
```
removed #text in div0/span0
inserted div0/span0/#text0
```