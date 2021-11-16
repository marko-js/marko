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
  <!---->
  <span />
</div>
```

# Mutations
```
inserted div0/#comment1
removed span after div0/#comment1
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
removed #comment after div0/span1
div0/span1/#text0: " " => "World"
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
div0/span1/#text0: "World" => "!"
```