# Render {}
```html
<!---->
<!---->
<button>
  0
</button>
<!---->
<!---->
```

# Mutations
```
inserted #comment0, #comment1, button2, #comment3, #comment4
```


# Render 
container.querySelector("button").click()

```html
<!---->
<!---->
<button>
  1
</button>
<!---->
<!---->
```

# Mutations
```
button2/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<!---->
<button>
  2
</button>
<!---->
<!---->
```

# Mutations
```
button2/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<!---->
<button>
  3
</button>
<!---->
<!---->
```

# Mutations
```
button2/#text0: "2" => "3"
```