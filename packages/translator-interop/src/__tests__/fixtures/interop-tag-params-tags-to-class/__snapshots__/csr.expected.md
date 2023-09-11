# Render {}
```html
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
```

# Mutations
```
inserted #text0, #text3
inserted button1
inserted button1/#text0
inserted div2
inserted div2/#text0
inserted div2/#text5
inserted div2/#text1
inserted div2/#text4
inserted div2/h12, div2/button3
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    2 * 0 = 0
  </button>
</div>
```

# Mutations
```
div2/button3/#text0: "1" => "2"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    2 * 1 = 2
  </button>
</div>
```

# Mutations
```
div2/button3/#text2: "0" => "1"
div2/button3/#text4: "0" => "2"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    3 * 1 = 3
  </button>
</div>
```

# Mutations
```
div2/button3/#text0: "2" => "3"
div2/button3/#text4: "2" => "3"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    3 * 2 = 6
  </button>
</div>
```

# Mutations
```
div2/button3/#text2: "1" => "2"
div2/button3/#text4: "3" => "6"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    4 * 2 = 8
  </button>
</div>
```

# Mutations
```
div2/button3/#text0: "3" => "4"
div2/button3/#text4: "6" => "8"
```