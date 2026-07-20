# Render `{"value":1}`

# Update
```html
<button>
  x: 1
</button>
```
## Change
```
INSERT: button
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  x: 2
</button>
```
## Change
```
UPDATE: button::text@3 "1" => "2"
```
