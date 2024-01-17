# Render {"a":2}
```html
<button>
  Increment
</button>
2 4
```

# Mutations
```
inserted button0, #text1, #text2, #text3
```


# Render 
container.querySelector("button").click()

```html
<button>
  Increment
</button>
2 5
```

# Mutations
```
#text3: "4" => "5"
```


# Render {"a":3}
```html
<button>
  Increment
</button>
3 5
```

# Mutations
```
#text1: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<button>
  Increment
</button>
3 6
```

# Mutations
```
#text3: "5" => "6"
```