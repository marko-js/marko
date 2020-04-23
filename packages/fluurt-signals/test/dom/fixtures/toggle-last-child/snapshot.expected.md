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
inserted div1/#text2
inserted div1/#text3
removed #text after div1/#text3
removed span after div1/#text3
removed #text after div1/#text3
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
inserted div1/#text2
inserted div1/span3
inserted div1/#text4
removed #text after div1/#text4
removed #text after div1/#text4
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
div1/span3/#text0: "World" => "!"
```


--- Hydrate ---
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
inserted div1/#text2
inserted div1/#text4
removed #comment after #text0
removed #comment after div1
```