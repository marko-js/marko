# Render {}
```html
<div>
  x=
  <span>
    0
  </span>
  , was=‍
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
inserted div0, button1
```


# Render 
container.querySelector("#increment")?.click();

```html
<div>
  x=
  <span>
    1
  </span>
  , was=0
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
div0/span1/#text0: "0" => "1"
div0/#text3: "‍" => "0"
```


# Render 
container.querySelector("#increment")?.click();

```html
<div>
  x=
  <span>
    2
  </span>
  , was=0
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
div0/span1/#text0: "1" => "2"
```


# Render "ASYNC"
```html
<div>
  x=
  <span>
    2
  </span>
  , was=1
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
div0/#text3: "0" => "1"
```