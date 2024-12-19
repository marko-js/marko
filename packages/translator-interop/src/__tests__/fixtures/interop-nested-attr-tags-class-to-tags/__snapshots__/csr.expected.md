# Render {}
```html
<button
  id="tags"
>
  0
</button>
<div>
  <button
    id="class"
  >
    0
  </button>
</div>
```

# Mutations
```
inserted #text0, #text1, #text2, button3, div4, #text5, #text6, #text7
inserted div4/#text1
inserted div4/#text3
inserted div4/button2
inserted div4/button2/#text0
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
  <button
    id="class"
  >
    0
  </button>
</div>
```

# Mutations
```
button3/#text0: "0" => "1"
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
  <button
    id="class"
  >
    1
  </button>
</div>
```

# Mutations
```
inserted div4/#text0
inserted div4/#text4
removed #text after div4/#text4
removed #text after div4/#text4
removed button after div4/#text4
removed #text after div4/#text4
removed #text after div4/#text4
inserted div4/#text1
inserted div4/#text3
inserted div4/button2
inserted div4/button2/#text0
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
  <button
    id="class"
  >
    1
  </button>
</div>
```

# Mutations
```
button3/#text0: "1" => "2"
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
  <button
    id="class"
  >
    2
  </button>
</div>
```

# Mutations
```
inserted div4/#text0
inserted div4/#text4
removed #text after div4/#text4
removed #text after div4/#text4
removed button after div4/#text4
removed #text after div4/#text4
removed #text after div4/#text4
inserted div4/#text1
inserted div4/#text3
inserted div4/button2
inserted div4/button2/#text0
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
  <button
    id="class"
  >
    2
  </button>
</div>
```

# Mutations
```
button3/#text0: "2" => "3"
```