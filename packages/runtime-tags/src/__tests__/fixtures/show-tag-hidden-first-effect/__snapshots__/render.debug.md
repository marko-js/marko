# Render
```html
<div
  id="ref"
>
  initial
</div>
<button
  id="toggle"
>
  Toggle
</button>
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Mount
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("initial")
INSERT: #ref::text("Mount")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Destroy
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("Mount")
INSERT: #ref::text("Destroy")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Mount
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("Destroy")
INSERT: #ref::text("Mount")
```
