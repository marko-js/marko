# Render
```html
<button
  id="t"
>
  t
</button>
<div
  id="c"
>
  <b>
    1
  </b>
  <b>
    2
  </b>
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
<div
  id="c"
/>
```
## Change
```
REMOVE: #c > b
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
<div
  id="c"
>
  <b>
    1
  </b>
  <b>
    2
  </b>
</div>
```
## Change
```
INSERT: #c > :is(b, b)
```
