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
REMOVE: ::text("loading")
INSERT: button
INSERT: button::text("inner ")
INSERT: button::text("0")
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
