# Render {}
```html
<button
  id="class"
>
  0
</button>
<button
  data-parent="0"
  id="tags"
>
  0
</button>
```

# Mutations
```
inserted #text0, button1, #text2, #text3, button4, #text5, #text6, #text7
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="class"
>
  0
</button>
<button
  data-parent="0"
  id="tags"
>
  1
</button>
```

# Mutations
```
button4/#text0: "0" => "1"
```


# Render 
container.querySelector("#class").click()

```html
<button
  id="class"
>
  1
</button>
<button
  data-parent="1"
  id="tags"
>
  1
</button>
```

# Mutations
```
button4: attr(data-parent) "0" => "1"
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
<button
  data-parent="1"
  id="tags"
>
  2
</button>
```

# Mutations
```
button4/#text0: "1" => "2"
```


# Render 
container.querySelector("#class").click()

```html
<button
  id="class"
>
  2
</button>
<button
  data-parent="2"
  id="tags"
>
  2
</button>
```

# Mutations
```
button4: attr(data-parent) "1" => "2"
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
<button
  data-parent="2"
  id="tags"
>
  3
</button>
```

# Mutations
```
button4/#text0: "2" => "3"
```