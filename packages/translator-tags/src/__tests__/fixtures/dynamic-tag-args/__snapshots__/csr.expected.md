# Render {}
```html
<!---->
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
inserted #comment0, button1, div2, #comment3
```


# Render 
container.querySelector("button").click()

```html
<!---->
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
button1/#text1: "1" => "2"
div2/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<!---->
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
button1/#text1: "2" => "3"
div2/#text0: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<!---->
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
button1/#text1: "3" => "4"
div2/#text0: "3" => "4"
```