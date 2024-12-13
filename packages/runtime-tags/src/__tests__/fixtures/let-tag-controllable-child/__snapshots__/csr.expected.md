# Render {}
```html
<button>
  1|1
</button>
<button>
  1|1
</button>
source=1
```

# Mutations
```
inserted button0, button1, #text2, #text3
```


# Render 
container.querySelectorAll("button").forEach(item => item.click())

```html
<button>
  2|2
</button>
<button>
  2|2
</button>
source=2
```

# Mutations
```
#text3: "1" => "2"
button0/#text0: "1" => "2"
button1/#text0: "1" => "2"
button0/#text2: "1" => "2"
button1/#text2: "1" => "2"
```


# Render 
container.querySelectorAll("button").forEach(item => item.click())

```html
<button>
  3|3
</button>
<button>
  3|3
</button>
source=3
```

# Mutations
```
#text3: "2" => "3"
button0/#text0: "2" => "3"
button1/#text0: "2" => "3"
button0/#text2: "2" => "3"
button1/#text2: "2" => "3"
```


# Render 
container.querySelectorAll("button").forEach(item => item.click())

```html
<button>
  4|4
</button>
<button>
  4|4
</button>
source=4
```

# Mutations
```
#text3: "3" => "4"
button0/#text0: "3" => "4"
button1/#text0: "3" => "4"
button0/#text2: "3" => "4"
button1/#text2: "3" => "4"
```