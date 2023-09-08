# Render {}
```html
<button
  id="class"
>
  0
</button>
<div>
  <button
    id="tags"
  >
    0
  </button>
</div>
```

# Mutations
```
inserted #text0, #text3
inserted button1
inserted button1/#text0
inserted div2
inserted div2/#text0
inserted div2/#text4
inserted div2/#text1
inserted div2/#text3
inserted div2/button2
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="class"
>
  0
</button>
<div>
  <button
    id="tags"
  >
    1
  </button>
</div>
```

# Mutations
```
div2/button2/#text0: "0" => "1"
```


# Render 
container.querySelector("#class").click()

```html
<button
  id="class"
>
  1
</button>
<div>
  <button
    id="tags"
  >
    1
  </button>
</div>
```

# Mutations
```
button1/#text0: "0" => "1"
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="class"
>
  1
</button>
<div>
  <button
    id="tags"
  >
    2
  </button>
</div>
```

# Mutations
```
div2/button2/#text0: "1" => "2"
```


# Render 
container.querySelector("#class").click()

```html
<button
  id="class"
>
  2
</button>
<div>
  <button
    id="tags"
  >
    2
  </button>
</div>
```

# Mutations
```
button1/#text0: "1" => "2"
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="class"
>
  2
</button>
<div>
  <button
    id="tags"
  >
    3
  </button>
</div>
```

# Mutations
```
div2/button2/#text0: "2" => "3"
```