# Render
```html
<button>
  inc
</button>
value 0
```
## Console
```
LOG "script n=0"
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  inc
</button>
LOADING
```
## Change
```
REMOVE: ::text("0")
REMOVE: ::text("value ")
INSERT: ::text("LOADING")
```

# Update
```html
<button>
  inc
</button>
value 2
```
## Change
```
REMOVE: ::text("LOADING")
INSERT: ::text("value "), ::text("2")
```
## Console
```
LOG "script n=2"
```
