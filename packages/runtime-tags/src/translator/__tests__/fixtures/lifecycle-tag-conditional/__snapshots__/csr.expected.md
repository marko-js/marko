# Render {}
```html
<!---->
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
inserted #comment0, #text1, div2, button3, button4
inserted div2/#text0
```


# Render 
container.querySelector("#increment")?.click()

```html
<!---->
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
removed #text in div2
inserted div2/#text0
```


# Render 
container.querySelector("#toggle")?.click()

```html
<!---->
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
inserted #text1
removed #text in div2
inserted div2/#text0
removed #text after #text1
```


# Render 
container.querySelector("#increment")?.click()

```html
<!---->
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
<!---->
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
inserted #text1
removed #text after #text1
removed #text in div2
inserted div2/#text0
```