# Render
```html
<button>
  Toggle
</button>
loading
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
```
## Change
```
REMOVE: ::text("loading")
```

# Update
```html
<button>
  Toggle
</button>
```
## Change
```
INSERT: t > span::text("1")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  Toggle
</button>
<span>
  1
</span>
```
## Change
```
INSERT: span
```
## Console
```
LOG "loaded"
```
