# Render
```html
<button
  id="t"
>
  t
</button>
<span>
  before
  <em>
    new
  </em>
  after
</span>
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
<span>
  beforeafter
</span>
```
## Change
```
REMOVE: span > em
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
<span>
  before
  <em>
    new
  </em>
  after
</span>
```
## Change
```
INSERT: span > em
```
