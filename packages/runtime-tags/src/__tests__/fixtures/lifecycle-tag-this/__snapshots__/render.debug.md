# Render
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

# Update
```js
container.querySelector("#increment")?.click();
```
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
## Change
```
REMOVE: #ref::text("x=0, was=undefined")
INSERT: #ref::text("x=1, was=0")
```

# Update
```js
container.querySelector("#increment")?.click();
```
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
## Change
```
REMOVE: #ref::text("x=1, was=0")
INSERT: #ref::text("x=2, was=1")
```
