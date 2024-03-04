# Render {}
```html
<!---->
<div>
  Hello Ryan 1
</div>
<button>
  1
</button>
<!---->
```

# Mutations
```
inserted #comment0, div1, button2, #comment3
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  Hello Ryan 2
</div>
<button>
  2
</button>
<!---->
```

# Mutations
```
div1/#text3: "1" => "2"
button2/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  Hello Ryan 3
</div>
<button>
  3
</button>
<!---->
```

# Mutations
```
div1/#text3: "2" => "3"
button2/#text0: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  Hello Ryan 4
</div>
<button>
  4
</button>
<!---->
```

# Mutations
```
div1/#text3: "3" => "4"
button2/#text0: "3" => "4"
```