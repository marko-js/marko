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
  count 0
</div>
<button
  id="inc"
>
  count 0
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
INSERT: #ref + #inc
UPDATE: #inc::text@6 "" => "0"
REMOVE: #ref::text("initial")
INSERT: #ref::text("count 0")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  count 1
</div>
<button
  id="inc"
>
  count 1
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
UPDATE: #inc::text@6 "0" => "1"
REMOVE: #ref::text("count 0")
INSERT: #ref::text("closed")
REMOVE: #ref::text("closed")
INSERT: #ref::text("count 1")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  closed
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #ref + #inc
REMOVE: #ref::text("count 1")
INSERT: #ref::text("closed")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  count 1
</div>
<button
  id="inc"
>
  count 1
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
INSERT: #ref + #inc
REMOVE: #ref::text("closed")
INSERT: #ref::text("count 1")
```
