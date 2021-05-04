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
div0/span0/#text0: " " => "World"
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
div0/span0/#text0: "World" => "!"
```