# Render {}
```html
<!---->
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
inserted #comment0, button1, div2, div3
```


# Render 
container.querySelector("button").click()

```html
<!---->
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
button1/#text1: "1" => "2"
div2/#text1: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<!---->
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
button1/#text1: "2" => "3"
div2/#text1: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<!---->
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
button1/#text1: "3" => "4"
div2/#text1: "3" => "4"
```