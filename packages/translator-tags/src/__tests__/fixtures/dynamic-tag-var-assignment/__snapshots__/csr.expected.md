# Render {}
```html
<!---->
<button
  class="inc"
>
  1
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
inserted #comment0, button1, button2
```


# Render 
container.querySelector("button.inc").click()

```html
<!---->
<button
  class="inc"
>
  2
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
button1/#text0: "1" => "2"
```


# Render 
container.querySelector("button.inc").click()

```html
<!---->
<button
  class="inc"
>
  3
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
button1/#text0: "2" => "3"
```


# Render 
container.querySelector("button.reset").click()

```html
<!---->
<button
  class="inc"
>
  0
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
button1/#text0: "3" => "0"
```


# Render 
container.querySelector("button.inc").click()

```html
<!---->
<button
  class="inc"
>
  1
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
button1/#text0: "0" => "1"
```