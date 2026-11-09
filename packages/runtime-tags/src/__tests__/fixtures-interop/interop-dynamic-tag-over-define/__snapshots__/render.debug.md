# Render
```html
<button
  id="class"
>
  toggle
</button>
<b
  id="a"
>
  a
</b>
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  toggle
</button>
<i
  id="b"
>
  b
</i>
```
## Change
```
INSERT: #class + #b
REMOVE: #b + #a
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  toggle
</button>
<b
  id="a"
>
  a
</b>
```
## Change
```
INSERT: #class + #a
REMOVE: #a + #b
```
