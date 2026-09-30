# Render `{"styles":["/a.css"]}`
```html
<button>
  hide
</button>
```

# Update
```js
document.body.append(document.createElement("aside"));
```
```html
<button>
  hide
</button>
<aside />
```
## Change
```
INSERT: button + aside
```

# Update `click("button")`
```html
<aside />
```
## Change
```
REMOVE: button
```
