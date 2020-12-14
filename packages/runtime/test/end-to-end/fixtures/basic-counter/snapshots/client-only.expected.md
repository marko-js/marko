# Render {"start":10}
```html
<div>
  10
</div>
<button>
  increment
</button>
```

# Mutations
```
inserted div0, button1
```


# Render 
(container) => container.querySelector("button").click()

```html
<div>
  11
</div>
<button>
  increment
</button>
```

# Mutations
```
div0/#text0: "10" => "11"
```