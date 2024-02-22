# Render {}
```html
<button
  id="tags"
>
  0
</button>
<button
  data-parent="0"
  id="class"
>
  0
</button>
<!---->
```

# Mutations
```
inserted button0, #text1, #text3, #comment4
inserted button2
inserted button2/#text0
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="tags"
>
  1
</button>
<button
  data-parent="1"
  id="class"
>
  0
</button>
<!---->
```

# Mutations
```
button0/#text0: "0" => "1"
button2: attr(data-parent) "0" => "1"
```


# Render 
container.querySelector("#class").click()

```html
<button
  id="tags"
>
  1
</button>
<button
  data-parent="1"
  id="class"
>
  1
</button>
<!---->
```

# Mutations
```
button2/#text0: "0" => "1"
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="tags"
>
  2
</button>
<button
  data-parent="2"
  id="class"
>
  1
</button>
<!---->
```

# Mutations
```
button0/#text0: "1" => "2"
button2: attr(data-parent) "1" => "2"
```


# Render 
container.querySelector("#class").click()

```html
<button
  id="tags"
>
  2
</button>
<button
  data-parent="2"
  id="class"
>
  2
</button>
<!---->
```

# Mutations
```
button2/#text0: "1" => "2"
```


# Render 
container.querySelector("#tags").click()

```html
<button
  id="tags"
>
  3
</button>
<button
  data-parent="3"
  id="class"
>
  2
</button>
<!---->
```

# Mutations
```
button0/#text0: "2" => "3"
button2: attr(data-parent) "2" => "3"
```