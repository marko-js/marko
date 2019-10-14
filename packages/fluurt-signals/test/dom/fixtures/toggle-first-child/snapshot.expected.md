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
inserted #text0, div1, #text2
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
removed span after div1/#text0
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
inserted div1/span1
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
div1/span1/#text0: "World" => "!"
```


--- Hydrate ---
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
inserted div1/#text0
inserted div1/#text2
removed #comment after #text0
```