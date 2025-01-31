# Render
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
INSERT #comment, #text, div, button0, button1
INSERT div/#text
```

# Render
```js
container.querySelector("#increment")?.click();
```
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
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("#toggle")?.click();
```
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
INSERT #text
REMOVE #text in div
INSERT div/#text
REMOVE #text after #comment
```

# Render
```js
container.querySelector("#increment")?.click();
```
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


# Render
```js
container.querySelector("#toggle")?.click();
```
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
INSERT #text
REMOVE #text after #comment
REMOVE #text in div
INSERT div/#text
```