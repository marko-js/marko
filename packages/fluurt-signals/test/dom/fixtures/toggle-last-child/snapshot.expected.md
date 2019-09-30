# Render {"value":"Hello"}
```html
<div>
  <span>
  </span>
  <span>
  </span>
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
  <span>
  </span>
  <span>
  </span>
</div>
```

# Mutations
```
removed span after div0/#text2
```


# Render {"value":"World"}
```html
<div>
  <span>
  </span>
  <span>
  </span>
  <span>
    World
  </span>
</div>
```

# Mutations
```
inserted div0/span3
```


# Render {"value":"!"}
```html
<div>
  <span>
  </span>
  <span>
  </span>
  <span>
    !
  </span>
</div>
```

# Mutations
```
div0/span3/#text0: "World" => "!"
```


--- Hydrate ---
# Render {"value":"Hello"}
```html
<div>
  <span>
  </span>
  <span>
  </span>
  <span>
    Hello
  </span>
</div>
```

# Mutations
```
inserted div0/#text2
inserted div0/#text4
removed #comment before div0
```