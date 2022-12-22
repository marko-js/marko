# Render {}
```html
<button
  class="inc"
>
  1
</button>
<div>
  1
</div>
```

# Mutations
```
inserted button0, div1
```


# Render 
container.querySelector("button.inc").click();

```html
<button
  class="inc"
>
  2
</button>
<div>
  2
</div>
```

# Mutations
```
button0/#text0: "1" => "2"
div1/#text0: "1" => "2"
```


# Render 
container.querySelector("button.inc").click();

```html
<button
  class="inc"
>
  3
</button>
<div>
  3
</div>
```

# Mutations
```
button0/#text0: "2" => "3"
div1/#text0: "2" => "3"
```


# Render 
container.querySelector("button.inc").click();

```html
<button
  class="inc"
>
  4
</button>
<div>
  4
</div>
```

# Mutations
```
button0/#text0: "3" => "4"
div1/#text0: "3" => "4"
```