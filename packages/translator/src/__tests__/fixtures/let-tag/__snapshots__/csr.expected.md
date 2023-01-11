# Render {}
```html
<button>
  1
</button>
1
```

# Mutations
```
inserted button0, #text1
```


# Render 
container.querySelector("button").click();

```html
<button>
  2
</button>
2
```

# Mutations
```
#text1: "1" => "2"
button0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click();

```html
<button>
  4
</button>
4
```

# Mutations
```
#text1: "2" => "4"
button0/#text0: "2" => "4"
```


# Render 
container.querySelector("button").click();

```html
<button>
  8
</button>
8
```

# Mutations
```
#text1: "4" => "8"
button0/#text0: "4" => "8"
```