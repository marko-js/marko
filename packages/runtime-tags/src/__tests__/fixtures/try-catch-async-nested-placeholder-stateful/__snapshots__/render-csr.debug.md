# Render

# Update
```html
loading
```
## Change
```
INSERT: ::text("loading")
```

# Update
```html
<button>
  inner 0
</button>
```
## Change
```
INSERT: button
REMOVE: button + ::text("loading")
UPDATE: button::text@6 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inner 1
</button>
```
## Change
```
UPDATE: button::text@6 "0" => "1"
```
