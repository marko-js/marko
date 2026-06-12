# Render
```html
<button>
  Toggle
</button>
loading
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
```
## Change
```
REMOVE: button + ::text("loading")
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
container.querySelector("button").click();
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
INSERT: button + span
```
## Console
```
LOG "loaded"
```
