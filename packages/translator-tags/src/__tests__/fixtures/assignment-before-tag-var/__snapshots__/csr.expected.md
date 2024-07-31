# Render {}
```html
<button>
  0 was ‍
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
  1 was 0
</button>
```

# Mutations
```
button0/#text2: "‍" => "0"
button0/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<button>
  2 was 1
</button>
```

# Mutations
```
button0/#text2: "0" => "1"
button0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<button>
  3 was 2
</button>
```

# Mutations
```
button0/#text2: "1" => "2"
button0/#text0: "2" => "3"
```