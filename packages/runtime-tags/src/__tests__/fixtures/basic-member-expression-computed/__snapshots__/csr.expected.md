# Render {}
```html
<div>
  a
</div>
<div>
  a
</div>
<button>
  Update
</button>
```

# Mutations
```
inserted div0, div1, button2
```


# Render 
container.querySelector("button").click()

```html
<div>
  b
</div>
<div>
  c
</div>
<button>
  Update
</button>
```

# Mutations
```
div0/#text0: "a" => "b"
div1/#text0: "a" => "c"
```


# Render 
container.querySelector("button").click()

```html
<div>
  c
</div>
<div>
  c
</div>
<button>
  Update
</button>
```

# Mutations
```
div0/#text0: "b" => "c"
```


# Render 
container.querySelector("button").click()

```html
<div>
  ‍
</div>
<div>
  ‍
</div>
<button>
  Update
</button>
```

# Mutations
```
div0/#text0: "c" => "‍"
div1/#text0: "c" => "‍"
```


# Render 
container.querySelector("button").click()

```html
<div>
  ‍
</div>
<div>
  ‍
</div>
<button>
  Update
</button>
```

# Mutations
```

```