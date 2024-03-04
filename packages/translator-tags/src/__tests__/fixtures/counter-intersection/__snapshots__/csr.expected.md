# Render {}
```html
<div>
  <button
    class="a"
  >
    0
  </button>
   + 
  <button
    class="b"
  >
    0
  </button>
   = 0
</div>
```

# Mutations
```
inserted div0
```


# Render 
container.querySelector("button.a").click()

```html
<div>
  <button
    class="a"
  >
    10
  </button>
   + 
  <button
    class="b"
  >
    0
  </button>
   = 10
</div>
```

# Mutations
```
div0/button0/#text0: "0" => "10"
div0/#text4: "0" => "10"
```


# Render 
container.querySelector("button.b").click()

```html
<div>
  <button
    class="a"
  >
    10
  </button>
   + 
  <button
    class="b"
  >
    5
  </button>
   = 15
</div>
```

# Mutations
```
div0/button2/#text0: "0" => "5"
div0/#text4: "10" => "15"
```