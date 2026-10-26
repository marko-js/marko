# Render `{"title":"a"}`
```html
<button>
  toggle
</button>
```
## Console
```
LOG "run" "la" 0
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "run" "Ua" 1
```

# Update `{"title":"b"}`
## Console
```
LOG "run" "Ub" 1
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "run" "lb" 2
```

# Update `{"title":"c"}`
## Console
```
LOG "run" "lc" 2
```
