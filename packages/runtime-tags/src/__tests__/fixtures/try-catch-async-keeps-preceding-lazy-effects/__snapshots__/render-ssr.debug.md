# Render
```html
<button>
  0
</button>
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
