# Render {}
```html
<!---->
<button />
<div>
  Id is dynamic
</div>
<!---->
```

# Mutations
```
inserted #comment0, button1, div2, #comment3
```


# Render 
container.querySelector("button").click()

```html
<!---->
<button />
<div
  id="dynamic"
/>
<!---->
```

# Mutations
```
inserted div2
removed div after div2
div2: attr(id) null => "dynamic"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<button />
<div>
  Id is dynamic
</div>
<!---->
```

# Mutations
```
inserted div2
removed div after div2
div2/#text1: "" => "dynamic"
```