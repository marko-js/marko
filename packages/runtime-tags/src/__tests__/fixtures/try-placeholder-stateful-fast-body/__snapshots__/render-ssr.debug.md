# Render
```html
<button>
  loaded 0
</button>
```
## Console
```
LOG "placeholder mounted"
LOG "placeholder destroyed"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  loaded 1
</button>
```
## Change
```
UPDATE: button::text@7 "0" => "1"
```
