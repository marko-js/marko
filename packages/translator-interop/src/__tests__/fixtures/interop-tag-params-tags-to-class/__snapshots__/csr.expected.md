# Render {}
```html
<!---->
<button
  id="class"
>
  0
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    1 * 0 = 0
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
inserted div3/#text5
inserted div3/#text1
inserted div3/#text4
inserted div3/h12, div3/button3
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    2 * 0 = 0
  </button>
</div>
<!---->
```

# Mutations
```
div3/button3/#text0: "1" => "2"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    2 * 1 = 2
  </button>
</div>
<!---->
```

# Mutations
```
div3/button3/#text2: "0" => "1"
div3/button3/#text4: "0" => "2"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    3 * 1 = 3
  </button>
</div>
<!---->
```

# Mutations
```
div3/button3/#text0: "2" => "3"
div3/button3/#text4: "2" => "3"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    3 * 2 = 6
  </button>
</div>
<!---->
```

# Mutations
```
div3/button3/#text2: "1" => "2"
div3/button3/#text4: "3" => "6"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    4 * 2 = 8
  </button>
</div>
<!---->
```

# Mutations
```
div3/button3/#text0: "3" => "4"
div3/button3/#text4: "6" => "8"
```