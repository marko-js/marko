# Render {}
```html
Body Content
<button />
```

# Mutations
```
inserted #text0, button1
```


# Render 
container.querySelector("button").click()

```html
<div>
  Body Content
</div>
<button />
```

# Mutations
```
inserted div0
removed #text after div0
inserted div0/#text0
```


# Render 
container.querySelector("button").click()

```html
Body Content
<button />
```

# Mutations
```
inserted #text0
removed div after #text0
```