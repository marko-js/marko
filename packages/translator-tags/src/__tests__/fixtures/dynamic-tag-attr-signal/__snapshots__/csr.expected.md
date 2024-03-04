# Render {}
```html
<!---->
<p
  class="A"
>
  paragraph
</p>
<button />
```

# Mutations
```
inserted #comment0, p1, button2
```


# Render 
container.querySelector("button").click()

```html
<!---->
<p
  class="B"
>
  paragraph
</p>
<button />
```

# Mutations
```
p1: attr(class) "A" => "B"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<p
  class="A"
>
  paragraph
</p>
<button />
```

# Mutations
```
p1: attr(class) "B" => "A"
```