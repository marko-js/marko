# Render {}
```html
<button>
  0 0
</button>
<button>
  0 0
</button>
```

# Mutations
```
inserted button0, button1
```


# Render 
container.querySelector("button").click()

```html
<button>
  1 1
</button>
<button>
  1 1
</button>
```

# Mutations
```
button0/#text0: "0" => "1"
button0/#text2: "0" => "1"
button1/#text0: "0" => "1"
button1/#text2: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<button>
  2 2
</button>
<button>
  2 2
</button>
```

# Mutations
```
button0/#text0: "1" => "2"
button0/#text2: "1" => "2"
button1/#text0: "1" => "2"
button1/#text2: "1" => "2"
```