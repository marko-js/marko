# Render
```html
<div
  id="ref"
>
  Mount 1 (count 0)
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

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Mount 1 (count 0)
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
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Mount 1 (count 0)
</div>
<button
  id="inc"
>
  count 2
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
UPDATE: #inc::text@6 "1" => "2"
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Destroy (count 2)
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
REMOVE: #ref::text("Mount 1 (count 0)")
INSERT: #ref::text("Destroy (count 2)")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Mount 2 (count 2)
</div>
<button
  id="inc"
>
  count 2
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
REMOVE: #ref::text("Destroy (count 2)")
INSERT: #ref::text("Mount 2 (count 2)")
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="ref"
>
  Mount 2 (count 2)
</div>
<button
  id="inc"
>
  count 3
</button>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
UPDATE: #inc::text@6 "2" => "3"
```
