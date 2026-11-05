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
  <b>
    B
  </b>
  <i>
    tail
  </i>
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
/>
```
## Change
```
REMOVE: #c > b
REMOVE: #c > i
```

# Update
```js
document.getElementById("i").click();
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
  <i>
    tail
  </i>
</div>
```
## Change
```
INSERT: #c > i
```
