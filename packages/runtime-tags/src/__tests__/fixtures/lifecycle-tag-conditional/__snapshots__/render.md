# Render
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

# Update
```js
container.querySelector("#increment")?.click();
```
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
## Change
```
REMOVE: #ref::text("Mount 0")
INSERT: #ref::text("Update 1")
```

# Update
```js
container.querySelector("#toggle")?.click();
```
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
## Change
```
REMOVE: #ref::text("Update 1")
INSERT: #ref::text("Destroy")
```

# Update
```js
container.querySelector("#increment")?.click();
```

# Update
```js
container.querySelector("#toggle")?.click();
```
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
## Change
```
REMOVE: #ref::text("Destroy")
INSERT: #ref::text("Mount 2")
```
