# Render {}
```html
<p
  class="A"
>
  paragraph
</p>
<button />
```

# Mutations
```
inserted p0, button1
```


# Render 
container.querySelector("button").click();

```html
<p
  class="B"
>
  paragraph
</p>
<button />
```

# Mutations
```
p0: attr(class) "A" => "B"
removed #text in p0
inserted p0/#text0
```


# Render 
container.querySelector("button").click();

```html
<p
  class="A"
>
  paragraph
</p>
<button />
```

# Mutations
```
p0: attr(class) "B" => "A"
removed #text in p0
inserted p0/#text0
```