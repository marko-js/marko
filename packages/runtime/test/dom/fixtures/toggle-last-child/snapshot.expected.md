# Render {"value":"Hello"}
```html
<div>
  <span />
  <span />
  <span>
    Hello
  </span>
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
  <!---->
</div>
```

# Mutations
```
inserted div0/#comment2
removed span after div0/#comment2
```


# Render {"value":"World"}
```html
<div>
  <span />
  <span />
  <span>
    World
  </span>
</div>
```

# Mutations
```
inserted div0/span2
removed #comment after div0/span2
div0/span2/#text0: " " => "World"
```


# Render {"value":"!"}
```html
<div>
  <span />
  <span />
  <span>
    !
  </span>
</div>
```

# Mutations
```
div0/span2/#text0: "World" => "!"
```