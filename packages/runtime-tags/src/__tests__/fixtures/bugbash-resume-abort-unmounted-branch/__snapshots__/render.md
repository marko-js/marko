# Render
```html
<button>
  toggle
</button>
<div>
  shown
</div>
```
## Console
```
LOG "script ran"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + div
```
## Console
```
LOG "aborted"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div>
  shown
</div>
```
## Change
```
INSERT: button + div
```
## Console
```
LOG "script ran"
```
