# Render {}
```html
<button>
  +
</button>
<span>
  0 was ‍
</span>
```

# Mutations
```
inserted button0, span1
```


# Render 
container.querySelector("button").click()

```html
<button>
  +
</button>
<span>
  1 was 0
</span>
```

# Mutations
```
span1/#text2: "‍" => "0"
span1/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<button>
  +
</button>
<span>
  2 was 1
</span>
```

# Mutations
```
span1/#text2: "0" => "1"
span1/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<button>
  +
</button>
<span>
  3 was 2
</span>
```

# Mutations
```
span1/#text2: "1" => "2"
span1/#text0: "2" => "3"
```