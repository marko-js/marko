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
removed span after div1/#text1
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
inserted div1/span2
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
div1/span2/#text0: "World" => "!"
```


--- Hydrate ---
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
inserted div1/#text1
inserted div1/#text3
removed #comment after #text0
removed #comment after div1
```