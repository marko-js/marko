# Render {"value":"Hello"}
```html
<div>
  <span>
  </span>
  <span>
    Hello
  </span>
  <span>
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
  <span>
  </span>
  <span>
  </span>
</div>
```

# Mutations
```
removed span after div0/#text1
```


# Render {"value":"World"}
```html
<div>
  <span>
  </span>
  <span>
    World
  </span>
  <span>
  </span>
</div>
```

# Mutations
```
inserted div0/span2
div0/span2/#text0: "World" => "World"
```


# Render {"value":"!"}
```html
<div>
  <span>
  </span>
  <span>
    !
  </span>
  <span>
  </span>
</div>
```

# Mutations
```
div0/span2/#text0: "World" => "!"
```