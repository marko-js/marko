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
    1
  </b>
  <i>
    tail
  </i>
   y
</div>
```
## Change
```
INSERT: #c > b, #c > i
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
    0
  </b>
  <b>
    1
  </b>
  <i>
    tail
  </i>
   y
</div>
```
## Change
```
INSERT: #c > b:nth-of-type(1)
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
REMOVE: #c > b
REMOVE: #c > i
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
    0
  </b>
  <b>
    1
  </b>
  <i>
    tail
  </i>
   y
</div>
```
## Change
```
INSERT: #c > b:nth-of-type(1), #c > b:nth-of-type(2), #c > i
```
