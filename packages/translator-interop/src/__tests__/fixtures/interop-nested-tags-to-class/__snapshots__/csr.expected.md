# Render {}
```html
<!---->
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
<!---->
```

# Mutations
```
inserted #comment0, #text1, #text4, #comment5
inserted button2
inserted button2/#text0
inserted div3
inserted div3/#text0
inserted div3/#text4
inserted div3/#text1
inserted div3/#text3
inserted div3/button2
```


# Render 
container.querySelector("#tags").click()

```html
<!---->
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
<!---->
```

# Mutations
```
div3/button2/#text0: "0" => "1"
```


# Render 
container.querySelector("#class").click()

```html
<!---->
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
<!---->
```

# Mutations
```
button2/#text0: "0" => "1"
```


# Render 
container.querySelector("#tags").click()

```html
<!---->
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
<!---->
```

# Mutations
```
div3/button2/#text0: "1" => "2"
```


# Render 
container.querySelector("#class").click()

```html
<!---->
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
<!---->
```

# Mutations
```
button2/#text0: "1" => "2"
```


# Render 
container.querySelector("#tags").click()

```html
<!---->
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
<!---->
```

# Mutations
```
div3/button2/#text0: "2" => "3"
```