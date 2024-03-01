# Render {}
```html
<button>
  1|1
</button>
source=1
```

# Mutations
```
inserted button0, #text1, #text2
```


# Render 
container.querySelector("button").click()

```html
<button>
  2|2
</button>
source=2
```

# Mutations
```
#text2: "1" => "2"
button0/#text0: "1" => "2"
button0/#text2: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<button>
  3|3
</button>
source=3
```

# Mutations
```
#text2: "2" => "3"
button0/#text0: "2" => "3"
button0/#text2: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<button>
  4|4
</button>
source=4
```

# Mutations
```
#text2: "3" => "4"
button0/#text0: "3" => "4"
button0/#text2: "3" => "4"
```