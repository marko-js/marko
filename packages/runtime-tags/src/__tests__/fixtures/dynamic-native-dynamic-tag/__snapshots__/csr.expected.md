# Render {}
```html
<!---->
<span
  class="A"
>
  body content
</span>
<button />
```

# Mutations
```
inserted #comment0, span1, button2
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div
  class="A"
>
  body content
</div>
<button />
```

# Mutations
```
inserted div1
removed span after div1
inserted div1/#text0
div1: attr(class) null => "A"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<span
  class="A"
>
  body content
</span>
<button />
```

# Mutations
```
inserted span1
removed div after span1
inserted span1/#text0
span1: attr(class) null => "A"
```