# Render {}
```html
<!---->
Body Content
<button />
```

# Mutations
```
inserted #comment0, #text1, button2
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  Body Content
</div>
<button />
```

# Mutations
```
inserted div1
removed #text after div1
inserted div1/#text0
```


# Render 
container.querySelector("button").click()

```html
<!---->
Body Content
<button />
```

# Mutations
```
inserted #text1
removed div after #text1
```