# Render {}
```html
<button>
</button>
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
<button>
</button>
```

# Mutations
```
removed span after #text2
```


--- Hydrate ---
# Render {}
```html
<button>
</button>
<span>
  hi
</span>
```

# Mutations
```
inserted #text2
inserted #text4
removed #comment after #text0
```