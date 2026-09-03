# Render

# Update
```html
<button>
  nope 0
</button>
```
## Change
```
INSERT: button::text("nope ")
INSERT: button::text@0 + ::text("0")
INSERT: button
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  nope 1
</button>
```
## Change
```
UPDATE: button::text@5 "0" => "1"
```
