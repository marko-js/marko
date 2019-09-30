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
inserted button0, #text1, span2, #text3
```


# Render 
container.querySelector("button").click();

```html
<button>
</button>
```

# Mutations
```
removed span after #text1
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
inserted #text1
span2/#text0: "hi" => "hi"
inserted #text3
removed #comment before button0
```