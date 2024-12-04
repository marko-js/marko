# Render {}
```html
<div />
<div />
<button>
  Click
</button>
```

# Mutations
```
inserted div0, div1, button2
```


# Render 
container.querySelector("button").click()

```html
<div
  class="baz"
/>
<div
  class="baz"
/>
<button>
  Click
</button>
```

# Mutations
```
div0: attr(class) null => "baz"
div1: attr(class) null => "baz"
```