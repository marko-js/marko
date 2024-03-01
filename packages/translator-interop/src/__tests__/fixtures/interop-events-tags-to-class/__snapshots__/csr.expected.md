# Render {}
```html
<!---->
<button
  id="class-api"
>
  0
</button>
<div
  id="tags-api"
>
  0
</div>
```

# Mutations
```
inserted #comment0, #text1, #text3, div4
inserted button2
inserted button2/#text0
```


# Render 
container.querySelector("#class-api").click()

```html
<!---->
<button
  id="class-api"
>
  1
</button>
<div
  id="tags-api"
>
  1
</div>
```

# Mutations
```
div4/#text0: "0" => "1"
button2/#text0: "0" => "1"
```


# Render 
container.querySelector("#class-api").click()

```html
<!---->
<button
  id="class-api"
>
  2
</button>
<div
  id="tags-api"
>
  2
</div>
```

# Mutations
```
div4/#text0: "1" => "2"
button2/#text0: "1" => "2"
```