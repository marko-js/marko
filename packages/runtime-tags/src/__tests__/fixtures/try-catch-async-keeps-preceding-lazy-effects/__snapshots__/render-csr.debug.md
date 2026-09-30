# Render

# Update
```html
<button>
  0
</button>
```
## Change
```
INSERT: button
UPDATE: button::text " " => "0"
```

# Update
```html
<button>
  0
</button>
ERROR!
```
## Change
```
INSERT: button + ::text("ERROR!")
UPDATE: ::text " " => "ERROR!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
ERROR!
```
## Change
```
UPDATE: button::text "0" => "1"
```
