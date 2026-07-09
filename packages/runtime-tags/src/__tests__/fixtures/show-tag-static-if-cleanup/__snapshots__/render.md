# Render
```html
<div
  id="ref"
>
  mount
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
  destroy
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("mount")
INSERT: #ref::text("destroy")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  mount
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("destroy")
INSERT: #ref::text("mount")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  destroy
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("mount")
INSERT: #ref::text("destroy")
```
