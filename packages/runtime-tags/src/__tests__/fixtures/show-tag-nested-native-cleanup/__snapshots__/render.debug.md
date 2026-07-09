# Render
```html
<div
  id="ref"
>
  Mounted
</div>
<section>
  <p>
    content
  </p>
</section>
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
  Destroyed
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref + section
REMOVE: #ref::text("Mounted")
INSERT: #ref::text("Destroyed")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Mounted
</div>
<section>
  <p>
    content
  </p>
</section>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
INSERT: #ref + section
REMOVE: #ref::text("Destroyed")
INSERT: #ref::text("Mounted")
```
