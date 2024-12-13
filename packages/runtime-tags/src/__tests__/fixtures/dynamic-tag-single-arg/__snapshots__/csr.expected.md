# Render {}
```html
<button>
  Count: 1
</button>
<div>
  1
</div>
<!---->
```

# Mutations
```
inserted button0, div1, #comment2
```


# Render 
container.querySelector("button").click()

```html
<button>
  Count: 2
</button>
<div>
  2
</div>
<!---->
```

# Mutations
```
button0/#text1: "1" => "2"
div1/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<button>
  Count: 3
</button>
<div>
  3
</div>
<!---->
```

# Mutations
```
button0/#text1: "2" => "3"
div1/#text0: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<button>
  Count: 4
</button>
<div>
  4
</div>
<!---->
```

# Mutations
```
button0/#text1: "3" => "4"
div1/#text0: "3" => "4"
```