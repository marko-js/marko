# Render `{"show":false,"promise":{}}`

# Update `{"show":true,"promise":{}}`
```html
<button>
  y 0
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
  y 1
</button>
```
## Change
```
UPDATE: button::text@2 "0" => "1"
```
