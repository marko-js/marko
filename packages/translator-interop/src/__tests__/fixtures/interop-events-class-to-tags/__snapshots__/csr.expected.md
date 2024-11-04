# Render {}
```html
<button
  id="tags-api"
>
  0
</button>
<div
  id="class-api"
>
  0
</div>
```

# Mutations
```
inserted #text0, #text1, #text2, button3, #text4, #text5, div6, #text7
```


# Render 
container.querySelector("#tags-api").click()

```html
<button
  id="tags-api"
>
  1
</button>
<div
  id="class-api"
>
  1
</div>
```

# Mutations
```
button3/#text0: "0" => "1"
div6/#text0: "0" => "1"
```


# Render 
container.querySelector("#tags-api").click()

```html
<button
  id="tags-api"
>
  2
</button>
<div
  id="class-api"
>
  2
</div>
```

# Mutations
```
button3/#text0: "1" => "2"
div6/#text0: "1" => "2"
```