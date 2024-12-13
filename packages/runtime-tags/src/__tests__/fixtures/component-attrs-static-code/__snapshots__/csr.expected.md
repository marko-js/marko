# Render {}
```html
<button>
  $0.00
</button>
<button>
  $0.00
</button>
```

# Mutations
```
inserted button0, button1
```


# Render 
container.querySelectorAll("button").forEach(button => button.click())

```html
<button>
  $1.00
</button>
<button>
  $1.00
</button>
```

# Mutations
```
button0/#text0: "$0.00" => "$1.00"
button1/#text0: "$0.00" => "$1.00"
```