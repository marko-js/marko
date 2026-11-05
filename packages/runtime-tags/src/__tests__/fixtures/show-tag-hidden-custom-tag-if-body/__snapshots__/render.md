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
    B
  </b>
  <i>
    tail
  </i>
   y
</div>
```
## Change
```
INSERT: #c::text@0 + :is(b, i)
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
    tail
  </i>
   y
</div>
```
## Change
```
REMOVE: #c::text@0 + b
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
  <i>
    tail
  </i>
   y
</div>
```
## Change
```
INSERT: #c::text@0 + b
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
REMOVE: #c::text@0 + b
REMOVE: #c::text@0 + i
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
  <i>
    tail
  </i>
   y
</div>
```
## Change
```
INSERT: #c::text@0 + :is(b, i)
```
