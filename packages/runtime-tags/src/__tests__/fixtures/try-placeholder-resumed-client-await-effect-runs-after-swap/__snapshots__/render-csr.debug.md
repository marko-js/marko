# Render
```html
<button>
  show
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  show
</button>
<span>
  shown
</span>
```
## Change
```
INSERT: span
```

# Update
```html
<button>
  show
</button>
loading
```
## Change
```
REMOVE: span
INSERT: ::text("loading")
```

# Update
```html
<button>
  show
</button>
<span>
  shown
</span>
<div>
  client
</div>
```
## Change
```
REMOVE: ::text("loading")
INSERT: span, div
```
## Console
```
LOG "if script ran"
```
