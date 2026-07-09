# Render
```html
<div
  id="ref"
>
  Mount
</div>
<section>
  <p>
    only child
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
  Destroy
</div>
<section />
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: section > p
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
<section>
  <p>
    only child
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
INSERT: section > p
REMOVE: #ref::text("Destroy")
INSERT: #ref::text("Mount")
```
