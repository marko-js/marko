# Render {}
```html
<!---->
<div>
  Child 1 has 3
</div>
<button />
```

# Mutations
```
inserted #comment0, div1, button2
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  Child 2 has 3
</div>
<button />
```

# Mutations
```
inserted div1
removed div after div1
div1/#text1: "" => "3"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  Child 1 has 3
</div>
<button />
```

# Mutations
```
inserted div1
removed div after div1
div1/#text1: "" => "3"
```