# Render {}
```html
<button
  id="inc"
>
  1|1
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
inserted button0, button1
```


# Render 
container.querySelector("#inc").click()

```html
<button
  id="inc"
>
  3|3
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
button0/#text0: "1" => "3"
button0/#text2: "1" => "3"
```


# Render 
container.querySelector("#inc").click()

```html
<button
  id="inc"
>
  5|5
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
button0/#text0: "3" => "5"
button0/#text2: "3" => "5"
```


# Render 
container.querySelector("#toggle").click()

```html
<button
  id="inc"
>
  5|5
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```

```


# Render 
container.querySelector("#inc").click()

```html
<button
  id="inc"
>
  5|6
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
button0/#text2: "5" => "6"
```


# Render 
container.querySelector("#inc").click()

```html
<button
  id="inc"
>
  5|7
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
button0/#text2: "6" => "7"
```