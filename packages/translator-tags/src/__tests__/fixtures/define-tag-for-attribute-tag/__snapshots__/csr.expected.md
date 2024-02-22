# Render {}
```html
<!---->
<div>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Mutations
```
inserted #comment0, div1, button2
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div
  class="selected"
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Mutations
```
div1: attr(class) null => "selected"
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Mutations
```
div1: attr(class) "selected" => null
```


# Render 
container.querySelector("button").click()

```html
<!---->
<div
  class="selected"
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Mutations
```
div1: attr(class) null => "selected"
```