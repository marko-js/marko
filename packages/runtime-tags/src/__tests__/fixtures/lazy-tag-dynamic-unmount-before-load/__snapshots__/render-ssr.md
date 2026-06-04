# Render
```html
<button>
  Toggle
</button>
Loading...
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
```
## Change
```
INSERT: span::text("1")
REMOVE: ::text("Loading...")
INSERT: button + span
REMOVE: button + span
```
