# Render {}
```html
<div>
  123
</div>
<button
  id="increment"
>
  123
</button>
```

# Mutations
```
inserted #text0, div1, button2
```


# Render 
container.querySelector("#increment")?.click()

```html
<div>
  124
</div>
<button
  id="increment"
>
  124
</button>
```

# Mutations
```
button2/#text0: "123" => "124"
div1/#text0: "123" => "124"
```