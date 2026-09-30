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
INSERT: button + span
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
INSERT: button + ::text("loading")
REMOVE: ::text + span
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
INSERT: button + :is(span, div)
REMOVE: div + ::text("loading")
```
## Console
```
LOG "if script ran"
```
