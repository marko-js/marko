# Render {"$global":{"x":1,"serializedGlobals":["x"]}}
```html
<div>
  <span
    class="hidden"
  >
    1
  </span>
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
inserted div0/#text1
removed span after div0/#text1
div0/span0/#text0: " " => "1"
```


# Render 
container.querySelector("button").click()

```html
<div>
  <span
    class="hidden"
  >
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
inserted div0/#text0
removed span after div0/#text0
inserted div0/span1
removed #text after div0/span1
div0/span1/#text0: " " => "1"
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
inserted div0/#text1
removed span after div0/#text1
div0/span0/#text0: " " => "1"
```