# Render
```html
<div
  id="ref"
>
  outer mount
</div>
<div
  id="nestedRef"
>
  inner mount
</div>
<button
  id="inner"
>
  Inner
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
  outer destroy
</div>
<div
  id="nestedRef"
>
  inner destroy
</div>
<button
  id="inner"
>
  Inner
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("outer mount")
INSERT: #ref::text("outer destroy")
REMOVE: #nestedRef::text("inner mount")
INSERT: #nestedRef::text("inner destroy")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  outer mount
</div>
<div
  id="nestedRef"
>
  inner mount
</div>
<button
  id="inner"
>
  Inner
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #nestedRef::text("inner destroy")
INSERT: #nestedRef::text("inner mount")
REMOVE: #ref::text("outer destroy")
INSERT: #ref::text("outer mount")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  outer destroy
</div>
<div
  id="nestedRef"
>
  inner destroy
</div>
<button
  id="inner"
>
  Inner
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref::text("outer mount")
INSERT: #ref::text("outer destroy")
REMOVE: #nestedRef::text("inner mount")
INSERT: #nestedRef::text("inner destroy")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  outer mount
</div>
<div
  id="nestedRef"
>
  inner mount
</div>
<button
  id="inner"
>
  Inner
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #nestedRef::text("inner destroy")
INSERT: #nestedRef::text("inner mount")
REMOVE: #ref::text("outer destroy")
INSERT: #ref::text("outer mount")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  outer mount
</div>
<div
  id="nestedRef"
>
  inner destroy
</div>
<button
  id="inner"
>
  Inner
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #nestedRef::text("inner mount")
INSERT: #nestedRef::text("inner destroy")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  outer mount
</div>
<div
  id="nestedRef"
>
  inner mount
</div>
<button
  id="inner"
>
  Inner
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #nestedRef::text("inner destroy")
INSERT: #nestedRef::text("inner mount")
```
