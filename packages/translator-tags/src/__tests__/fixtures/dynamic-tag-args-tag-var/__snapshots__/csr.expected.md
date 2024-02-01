# Render {}
```html
<button>
  Count: 1
</button>
<div>
  Child: 1
</div>
<div>
  Parent: 
</div>
```

# Mutations
```
inserted button0, div1, div2
```


# Render 
container.querySelector("button").click()

```html
<button>
  Count: 2
</button>
<div>
  Child: 2
</div>
<div>
  Parent: 
</div>
```

# Mutations
```
button0/#text1: "1" => "2"
div1/#text1: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<button>
  Count: 3
</button>
<div>
  Child: 3
</div>
<div>
  Parent: 
</div>
```

# Mutations
```
button0/#text1: "2" => "3"
div1/#text1: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<button>
  Count: 4
</button>
<div>
  Child: 4
</div>
<div>
  Parent: 
</div>
```

# Mutations
```
button0/#text1: "3" => "4"
div1/#text1: "3" => "4"
```