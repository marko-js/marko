# Render {}
```html
<button
  class="inc"
>
  1
</button>
<div>
  Count: 1
</div>
<!---->
<!---->
```

# Mutations
```
inserted button0, div1, #comment2, #comment3
```


# Render 
container.querySelector("button").click()

```html
<button
  class="inc"
>
  2
</button>
<div>
  Count: 2
</div>
<!---->
<!---->
```

# Mutations
```
button0/#text0: "1" => "2"
div1/#text1: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<button
  class="inc"
>
  3
</button>
<div>
  Count: 3
</div>
<!---->
<!---->
```

# Mutations
```
button0/#text0: "2" => "3"
div1/#text1: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<button
  class="inc"
>
  4
</button>
<div>
  Count: 4
</div>
<!---->
<!---->
```

# Mutations
```
button0/#text0: "3" => "4"
div1/#text1: "3" => "4"
```