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
INSERT: button::text("inner ")
INSERT: button::text@0 + ::text("0")
REMOVE: ::text("loading")
INSERT: button
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
