# Render
```html
<button>
  t
</button>
```
## Console
```
LOG "static child script"
LOG "if lifecycle"
LOG "row script"
LOG "row script"
LOG "parent lifecycle"
LOG "parent script"
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "row script"
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "if lifecycle"
LOG "row script"
```
