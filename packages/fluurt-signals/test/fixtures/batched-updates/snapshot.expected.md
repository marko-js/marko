# Render {}
```html
<button>
  0
</button>
```

# Mutations
```
inserted button0
```


# Render 
container.querySelector("button").click();

```html
<button>
  2
</button>
```

# Mutations
```
button0/#text0: "0" => "2"
```


--- Hydrate ---
# Render {}
```html
<button>
  0
</button>
```

# Mutations
```
removed #comment before button0
```