# Render {}
```html
<div
  id="ref"
>
  x=0, was=undefined
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
inserted div0/#text0
```


# Render 
container.querySelector("#increment")?.click()

```html
<div
  id="ref"
>
  x=1, was=0
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
removed #text in div0
inserted div0/#text0
```


# Render 
container.querySelector("#increment")?.click()

```html
<div
  id="ref"
>
  x=2, was=1
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
removed #text in div0
inserted div0/#text0
```