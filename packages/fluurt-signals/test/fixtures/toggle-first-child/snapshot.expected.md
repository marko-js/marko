# Render {"value":"Hello"}
```html
<div>
  <span>
    Hello
  </span>
  <span>
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
removed span after div0/#text0
```


# Render {"value":"World"}
```html
<div>
  <span>
    World
  </span>
  <span>
  </span>
  <span>
  </span>
</div>
```

# Mutations
```
inserted div0/span1
```


# Render {"value":"!"}
```html
<div>
  <span>
    !
  </span>
  <span>
  </span>
  <span>
  </span>
</div>
```

# Mutations
```
div0/span1/#text0: "World" => "!"
```


--- Hydrate ---
# Render {"value":"Hello"}
```html
<div>
  <span>
    Hello
  </span>
  <span>
  </span>
  <span>
  </span>
</div>
```

# Mutations
```
inserted div0/#text0
inserted div0/#text2
removed #comment before div0
```