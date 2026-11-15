# Render
```html
01
<button
  class="toggle"
>
  toggle
</button>
<button
  class="add"
>
  add
</button>
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="add"
>
  add
</button>
```
## Change
```
REMOVE: ::text("0")
REMOVE: ::text("1")
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
01
<button
  class="toggle"
>
  toggle
</button>
<button
  class="add"
>
  add
</button>
```
## Change
```
INSERT: ::text("0")
INSERT: ::text@0 + ::text("1")
```

# Update
```js
document.querySelector(".add").click();
```
```html
012
<button
  class="toggle"
>
  toggle
</button>
<button
  class="add"
>
  add
</button>
```
## Change
```
INSERT: ::text@1 + ::text("2")
```
