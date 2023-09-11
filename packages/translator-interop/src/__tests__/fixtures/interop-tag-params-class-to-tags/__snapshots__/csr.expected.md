# Render {}
```html
<button
  id="tags"
>
  0
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    1 * 0 = 0
  </button>
</div>
```

# Mutations
```
inserted #text0, #text1, #text2, button3, div4, #text5, #text6, #text7
inserted div4/#text1
inserted div4/#text4
inserted div4/h12
inserted div4/h12/#text0
inserted div4/button3
inserted div4/button3/#text0
inserted div4/button3/#text1
inserted div4/button3/#text2
inserted div4/button3/#text3
inserted div4/button3/#text4
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="tags"
>
  1
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    1 * 1 = 1
  </button>
</div>
```

# Mutations
```
button3/#text0: "0" => "1"
div4/button3/#text2: "0" => "1"
div4/button3/#text4: "0" => "1"
```


# Render 
container.querySelector("#class").click()

```html
<button
  id="tags"
>
  1
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    2 * 1 = 2
  </button>
</div>
```

# Mutations
```
inserted div4/#text0
inserted div4/#text5
removed #text after div4/#text5
removed #text after div4/#text5
removed h1 after div4/#text5
removed button after div4/#text5
removed #text after div4/#text5
removed #text after div4/#text5
inserted div4/#text1
inserted div4/#text4
inserted div4/h12
inserted div4/h12/#text0
inserted div4/button3
inserted div4/button3/#text0
inserted div4/button3/#text1
inserted div4/button3/#text2
inserted div4/button3/#text3
inserted div4/button3/#text4
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="tags"
>
  2
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    2 * 2 = 4
  </button>
</div>
```

# Mutations
```
button3/#text0: "1" => "2"
div4/button3/#text2: "1" => "2"
div4/button3/#text4: "2" => "4"
```


# Render 
container.querySelector("#class").click()

```html
<button
  id="tags"
>
  2
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    3 * 2 = 6
  </button>
</div>
```

# Mutations
```
inserted div4/#text0
inserted div4/#text5
removed #text after div4/#text5
removed #text after div4/#text5
removed h1 after div4/#text5
removed button after div4/#text5
removed #text after div4/#text5
removed #text after div4/#text5
inserted div4/#text1
inserted div4/#text4
inserted div4/h12
inserted div4/h12/#text0
inserted div4/button3
inserted div4/button3/#text0
inserted div4/button3/#text1
inserted div4/button3/#text2
inserted div4/button3/#text3
inserted div4/button3/#text4
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="tags"
>
  3
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    3 * 3 = 9
  </button>
</div>
```

# Mutations
```
button3/#text0: "2" => "3"
div4/button3/#text2: "2" => "3"
div4/button3/#text4: "6" => "9"
```