# Render {}
```html
<div>
  <button>
    0
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
  <button>
    1
  </button>
</div>
```

# Mutations
```
div0/button0/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<div>
  <button>
    2
  </button>
</div>
```

# Mutations
```
div0/button0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<div>
  <span>
    The button was clicked 3 times.
  </span>
</div>
```

# Mutations
```
inserted div0/span0
removed button after div0/span0
div0/span0/#text1: "" => "3"
```