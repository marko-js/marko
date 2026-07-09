# Render
```html
<div
  id="refa"
>
  a mount
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
  id="refa"
>
  a destroy
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #refa::text("a mount")
INSERT: #refa::text("a destroy")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="refa"
>
  a mount
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #refa::text("a destroy")
INSERT: #refa::text("a mount")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="refa"
>
  a destroy
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #refa::text("a mount")
INSERT: #refa::text("a destroy")
```
