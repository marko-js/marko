# Render
```html
loading
```

# Update
```html
<button>
  done 
</button>
```
## Change
```
INSERT: button::text("done ")
REMOVE: ::text("loading")
INSERT: button
```

# Update
```js
document.querySelector("button")?.click();
```
```html
<button>
  done true
</button>
```
## Change
```
UPDATE: body[class] null => "dark"
UPDATE: button::text@5 "" => "true"
```
