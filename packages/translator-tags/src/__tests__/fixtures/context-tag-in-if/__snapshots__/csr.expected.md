# Render {}
```html
<div>
  <span>
    123
  </span>
  <button
    id="toggle"
  >
    Toggle
  </button>
</div>
```

# Mutations
```
inserted div0
```


# Render 
container.querySelector("#toggle")?.click()

```html
<div>
  <button
    id="toggle"
  >
    Toggle
  </button>
</div>
```

# Mutations
```
inserted div0/#text1
removed span after div0/#text1
```


# Render 
container.querySelector("#toggle")?.click()

```html
<div>
  <span>
    123
  </span>
  <button
    id="toggle"
  >
    Toggle
  </button>
</div>
```

# Mutations
```
inserted div0/span1
removed #text after div0/span1
div0/span1/#text0: " " => "123"
```