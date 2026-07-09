# Render
```html
<div
  id="ref"
>
  Mount 0
</div>
<button
  id="bump"
>
  bump
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
  Destroy 0
</div>
<button
  id="bump"
>
  bump
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
INSERT: #ref::text("Destroy 0")
```

# Update
```js
c.querySelector(`#${id}`).click();
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Mount 1
</div>
<button
  id="bump"
>
  bump
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("Destroy 0")
INSERT: #ref::text("Mount 1")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Update 2
</div>
<button
  id="bump"
>
  bump
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("Mount 1")
INSERT: #ref::text("Update 2")
```
