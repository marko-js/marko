# Render
```html
<button>
  t
</button>
```
## Console
```
LOG "if lifecycle"
LOG "row script"
LOG "row script"
LOG "static child script"
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
