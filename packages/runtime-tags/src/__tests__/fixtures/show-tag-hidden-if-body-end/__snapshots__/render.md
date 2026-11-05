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
  <i>
    head
  </i>
  <b>
    B
  </b>
   y
</div>
```
## Change
```
INSERT: #c::text@0 + :is(i, b)
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
  <i>
    head
  </i>
   y
</div>
```
## Change
```
REMOVE: #c > i + b
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
  <i>
    head
  </i>
  <b>
    B
  </b>
   y
</div>
```
## Change
```
INSERT: #c > i + b
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
REMOVE: #c::text@0 + i
REMOVE: #c::text@0 + b
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
  <i>
    head
  </i>
  <b>
    B
  </b>
   y
</div>
```
## Change
```
INSERT: #c::text@0 + :is(i, b)
```
