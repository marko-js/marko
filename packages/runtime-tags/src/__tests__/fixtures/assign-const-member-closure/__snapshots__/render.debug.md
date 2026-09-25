# Render
```html
<button
  class="open"
>
  open
</button>
<button
  class="read"
>
  read
</button>
```

# Update
```js
document.querySelector(".open").click();
```
## Console
```
LOG "click" true
```

# Update
```js
document.dispatchEvent(new document.defaultView.KeyboardEvent("keydown"));
```
## Console
```
LOG "key" true
```

# Update
```js
document.querySelector(".read").click();
```
## Console
```
LOG "read" true
```
