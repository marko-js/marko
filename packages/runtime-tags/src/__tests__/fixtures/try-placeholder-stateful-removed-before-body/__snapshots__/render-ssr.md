# Render
```html
<button>
  hide
</button>
loading
```
## Console
```
LOG "placeholder mounted"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  hide
</button>
```
## Change
```
REMOVE: button + ::text(" loading")
```
## Console
```
LOG "placeholder destroyed"
```
