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
  x  y
</div>
```

# Update
```js
document.getElementById("t").click();
```

# Update
```js
document.getElementById("i").click();
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
INSERT: #c > b
```

# Update
```js
document.getElementById("t").click();
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
REMOVE: #c > b
```

# Update
```js
document.getElementById("t").click();
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
INSERT: #c > b
```
