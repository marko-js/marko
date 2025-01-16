# Render {}
```html
<button>
  0
</button>
<button>
  0
</button>
<div>
  0 0
</div>
```

# Mutations
```
inserted button0, button1, div2
```


# Render 
container.querySelectorAll("button").forEach(item => item.click())

```html
<button>
  1
</button>
<button>
  1
</button>
<div>
  1 1
</div>
```

# Mutations
```
div2/#text0: "0" => "1"
button0/#text0: "0" => "1"
div2/#text2: "0" => "1"
button1/#text0: "0" => "1"
```


# Render 
container.querySelectorAll("button").forEach(item => item.click())

```html
<button>
  2
</button>
<button>
  2
</button>
<div>
  2 2
</div>
```

# Mutations
```
div2/#text0: "1" => "2"
button0/#text0: "1" => "2"
div2/#text2: "1" => "2"
button1/#text0: "1" => "2"
```


# Render 
container.querySelectorAll("button").forEach(item => item.click())

```html
<button>
  3
</button>
<button>
  3
</button>
<div>
  3 3
</div>
```

# Mutations
```
div2/#text0: "2" => "3"
button0/#text0: "2" => "3"
div2/#text2: "2" => "3"
button1/#text0: "2" => "3"
```