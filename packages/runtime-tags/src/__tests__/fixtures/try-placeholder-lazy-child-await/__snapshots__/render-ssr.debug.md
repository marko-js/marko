# Render
```html
<button
  class="page"
>
  0
</button>
<button
  class="child"
>
  inc
</button>
0
```

# Update
```js
document.querySelector(".child").click();
```

# Update
```html
<button
  class="page"
>
  0
</button>
loading
```
## Change
```
INSERT: .page + ::text("loading")
REMOVE: ::text + button
REMOVE: ::text + ::text("0")
```

# Update
```html
<button
  class="page"
>
  0
</button>
<button
  class="child"
>
  inc
</button>
1
```
## Change
```
INSERT: .page + :is(.child, ::text("1"))
REMOVE: ::text + ::text("loading")
```
