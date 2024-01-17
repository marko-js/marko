# Render {}
```html
<div
  id="ref"
>
  Mount 0
</div>
<button
  id="increment"
>
  Increment
</button>
<button
  id="toggle"
>
  Toggle
</button>
```

# Mutations
```
inserted #text0, div1, button2, button3
inserted div1/#text0
```


# Render 
container.querySelector("#increment")?.click()

```html
<div
  id="ref"
>
  Update 1
</div>
<button
  id="increment"
>
  Increment
</button>
<button
  id="toggle"
>
  Toggle
</button>
```

# Mutations
```
removed #text in div1
inserted div1/#text0
```


# Render 
container.querySelector("#toggle")?.click()

```html
<div
  id="ref"
>
  Destroy
</div>
<button
  id="increment"
>
  Increment
</button>
<button
  id="toggle"
>
  Toggle
</button>
```

# Mutations
```
inserted #text0
removed #text after #text0
removed #text in div1
inserted div1/#text0
```


# Render 
container.querySelector("#increment")?.click()

```html
<div
  id="ref"
>
  Destroy
</div>
<button
  id="increment"
>
  Increment
</button>
<button
  id="toggle"
>
  Toggle
</button>
```

# Mutations
```

```


# Render 
container.querySelector("#toggle")?.click()

```html
<div
  id="ref"
>
  Mount 2
</div>
<button
  id="increment"
>
  Increment
</button>
<button
  id="toggle"
>
  Toggle
</button>
```

# Mutations
```
inserted #text0
removed #text after #text0
removed #text in div1
inserted div1/#text0
```