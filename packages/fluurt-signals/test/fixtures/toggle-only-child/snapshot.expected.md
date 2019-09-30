# Render {"value":"Hello"}
```html
<div>
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
</div>
```

# Mutations
```
inserted div0/#text0
div0/span1/#text0: "Hello" => "Hello"
inserted div0/#text2
removed #comment before div0
```