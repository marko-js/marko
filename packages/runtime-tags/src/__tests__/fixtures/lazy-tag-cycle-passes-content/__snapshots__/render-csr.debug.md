# Render

# Update
```html
<button>
  a
</button>
```
## Change
```
INSERT: button
```

# Update
```html
<button>
  b
</button>
<button>
  a
</button>
```
## Change
```
INSERT: button
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
## Console
```
LOG "b"
LOG "a"
```
