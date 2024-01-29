# Render {"$global":{"x":1,"serializedGlobals":["x"]}}
```html
<div>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
inserted div0
```


# Render 
container.querySelector("button").click()

```html
<div>
  <span>
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
inserted div0/span0
removed #text after div0/span0
```


# Render 
container.querySelector("button").click()

```html
<div>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
inserted div0/#text0
removed span after div0/#text0
```


# Render 
container.querySelector("button").click()

```html
<div>
  <span>
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
inserted div0/span0
removed #text after div0/span0
```