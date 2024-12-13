# Render {}
```html
<button>
  1|1
</button>
```

# Mutations
```
inserted button0
```


# Render 
container.querySelector("button").click()

```html
<button>
  3|3
</button>
```

# Mutations
```
button0/#text0: "1" => "3"
button0/#text2: "1" => "3"
```


# Render 
container.querySelector("button").click()

```html
<button>
  5|5
</button>
```

# Mutations
```
button0/#text0: "3" => "5"
button0/#text2: "3" => "5"
```


# Render 
container.querySelector("button").click()

```html
<button>
  7|7
</button>
```

# Mutations
```
button0/#text0: "5" => "7"
button0/#text2: "5" => "7"
```