# Render {}
```html
<div>
  <button>
    0
  </button>
  <!--0 + 0 = 0-->
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
  <!--1 + 1 = 2-->
</div>
```

# Mutations
```
div0/button0/#text0: "0" => "1"
div0/#comment1: "0 + 0 = 0" => "1 + 1 = 2"
```


# Render 
container.querySelector("button").click()

```html
<div>
  <button>
    2
  </button>
  <!--2 + 2 = 4-->
</div>
```

# Mutations
```
div0/button0/#text0: "1" => "2"
div0/#comment1: "1 + 1 = 2" => "2 + 2 = 4"
```


# Render 
container.querySelector("button").click()

```html
<div>
  <button>
    3
  </button>
  <!--3 + 3 = 6-->
</div>
```

# Mutations
```
div0/button0/#text0: "2" => "3"
div0/#comment1: "2 + 2 = 4" => "3 + 3 = 6"
```