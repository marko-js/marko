# Render {}
```html
<span
  class="A"
>
  body content
</span>
<button />
```

# Mutations
```
inserted span0, button1
```


# Render 
container.querySelector("button").click()

```html
<div
  class="A"
>
  body content
</div>
<button />
```

# Mutations
```
inserted div0
removed span after div0
div0: attr(class) null => "A"
inserted div0/#text0
```


# Render 
container.querySelector("button").click()

```html
<span
  class="A"
>
  body content
</span>
<button />
```

# Mutations
```
inserted span0
removed div after span0
span0: attr(class) null => "A"
inserted span0/#text0
```