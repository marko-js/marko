# Render {}
```html
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
inserted div0, button1
```


# Render 
container.querySelector("button").click()

```html
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
div0: attr(class) null => "selected"
```


# Render 
container.querySelector("button").click()

```html
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
div0: attr(class) "selected" => null
```


# Render 
container.querySelector("button").click()

```html
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
div0: attr(class) null => "selected"
```