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
```
## Change
```
REMOVE: #ref::text("Mount 0")
INSERT: #ref::text("Update 1")
```

# Update
```js
container.querySelector("#increment")?.click();
```
```html
<div
  id="ref"
>
  Update 2
</div>
<button
  id="increment"
>
  Increment
</button>
```
## Change
```
REMOVE: #ref::text("Update 1")
INSERT: #ref::text("Update 2")
```
