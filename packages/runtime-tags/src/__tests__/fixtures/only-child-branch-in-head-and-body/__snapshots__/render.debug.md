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

# Update
```js
document.querySelector("button").click();
```
```html
<aside />
```
## Change
```
REMOVE: button
```
