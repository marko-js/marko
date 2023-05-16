# Render {}
```html
<button
  id="multiplier"
>
  increase multiplier (1)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  0
</div>
```

# Mutations
```
inserted button0, button1, div2
```


# Render 
container.querySelector("button#count").click()

```html
<button
  id="multiplier"
>
  increase multiplier (1)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  1
</div>
```

# Mutations
```
div2/#text0: "0" => "1"
```


# Render 
container.querySelector("button#count").click()

```html
<button
  id="multiplier"
>
  increase multiplier (1)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  2
</div>
```

# Mutations
```
div2/#text0: "1" => "2"
```


# Render 
container.querySelector("button#multiplier").click()

```html
<button
  id="multiplier"
>
  increase multiplier (2)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  4
</div>
```

# Mutations
```
button0/#text1: "1" => "2"
div2/#text0: "2" => "4"
```