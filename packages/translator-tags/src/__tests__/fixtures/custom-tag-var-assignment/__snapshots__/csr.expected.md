# Render {}
```html
<button
  class="inc-child"
>
  1
</button>
<button
  class="inc-parent"
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
inserted button0, button1, button2
```


# Render 
container.querySelector("button.inc-child").click()

```html
<button
  class="inc-child"
>
  2
</button>
<button
  class="inc-parent"
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
button0/#text0: "1" => "2"
button1/#text0: "1" => "2"
```


# Render 
container.querySelector("button.inc-parent").click()

```html
<button
  class="inc-child"
>
  3
</button>
<button
  class="inc-parent"
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
button0/#text0: "2" => "3"
button1/#text0: "2" => "3"
```


# Render 
container.querySelector("button.reset").click()

```html
<button
  class="inc-child"
>
  0
</button>
<button
  class="inc-parent"
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
button0/#text0: "3" => "0"
button1/#text0: "3" => "0"
```