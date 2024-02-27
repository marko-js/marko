# Render {}
```html
<!---->
<div>
  1
</div>
<button>
  1
</button>
```

# Mutations
```
inserted #comment0, div1, button2
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  2
</div>
<button>
  2
</button>
```

# Mutations
```
button2/#text0: "1" => "2"
div1/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  3
</div>
<button>
  3
</button>
```

# Mutations
```
button2/#text0: "2" => "3"
div1/#text0: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  4
</div>
<button>
  4
</button>
```

# Mutations
```
button2/#text0: "3" => "4"
div1/#text0: "3" => "4"
```