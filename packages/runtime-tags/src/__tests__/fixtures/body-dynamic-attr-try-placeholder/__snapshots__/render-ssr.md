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
REMOVE: ::text("loading")
INSERT: button
INSERT: button::text("done ")
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
