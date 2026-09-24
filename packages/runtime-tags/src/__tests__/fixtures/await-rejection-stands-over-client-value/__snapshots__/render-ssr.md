# Render
```html
<button>
  0
</button>
loading
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
loading
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update
```html
<button>
  1
</button>
caught server
```
## Change
```
REMOVE: ::text("loading")
INSERT: button + ::text("caught server")
```
