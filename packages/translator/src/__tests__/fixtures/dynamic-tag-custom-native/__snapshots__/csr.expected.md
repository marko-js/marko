# Render {}
```html
<button />
<div>
  Id is dynamic
</div>
```

# Mutations
```
inserted button0, div1
```


# Render 
container.querySelector("button").click()

```html
<button />
<div
  id="dynamic"
/>
```

# Mutations
```
inserted div1
removed div after div1
div1: attr(id) null => "dynamic"
```


# Render 
container.querySelector("button").click()

```html
<button />
<div>
  Id is dynamic
</div>
```

# Mutations
```
inserted div1
removed div after div1
div1/#text1: "" => "dynamic"
```