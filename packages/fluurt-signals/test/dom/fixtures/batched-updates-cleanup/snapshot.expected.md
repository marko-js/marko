# Render {}
```html
<button />
<span>
  hi
</span>
```

# Mutations
```
inserted #text0, button1, #text2, span3, #text4, #text5
```


# Render 
container.querySelector("button").click();

```html
<button />
```

# Mutations
```
inserted #text2
inserted #text3
removed #text after #text3
removed span after #text3
removed #text after #text3
```


--- Hydrate ---
# Render {}
```html
<button />
<span>
  hi
</span>
```

# Mutations
```
inserted #text2
inserted #text4
removed #comment after #text0
removed #comment after #text4
```