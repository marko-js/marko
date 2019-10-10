# Render {}
```html
<button>
  0
</button>
```

# Mutations
```
inserted #text0, button1, #text2
```


# Render 
container.querySelector("button").click();

```html
<button>
  1
</button>
```

# Mutations
```
button1/#text0: "0" => "1"
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
button1/#text0: "1" => "2"
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
removed #comment after #text0
```