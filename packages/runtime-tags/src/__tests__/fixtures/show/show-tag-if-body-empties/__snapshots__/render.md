# Render
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<div
  id="c"
>
  x 
  <b>
    B
  </b>
   y
</div>
```

# Update
```js
document.getElementById(id).click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<div
  id="c"
>
  x  y
</div>
```
## Change
```
REMOVE: #c::text@0 + b
```

# Update
```js
document.getElementById(id).click();
```

# Update
```js
document.getElementById(id).click();
```

# Update
```js
document.getElementById(id).click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<div
  id="c"
>
  x 
  <b>
    B
  </b>
   y
</div>
```
## Change
```
INSERT: #c::text@0 + b
```
