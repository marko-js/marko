# Render
```html
<div
  id="ref"
>
  open 0
</div>
<button
  id="next"
>
  next
</button>
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
  open 1
</div>
<button
  id="next"
>
  next
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("open 0")
INSERT: #ref::text("close 1")
REMOVE: #ref::text("close 1")
INSERT: #ref::text("open 1")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  close 1
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref + #next
REMOVE: #ref::text("open 1")
INSERT: #ref::text("close 1")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  close 1
</div>
<button
  id="next"
>
  next
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
INSERT: #ref + #next
```
