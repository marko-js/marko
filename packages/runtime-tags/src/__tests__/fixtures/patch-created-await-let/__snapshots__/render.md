# Render `{"show":false,"promise":{}}`

# Update `{"show":true,"promise":{}}`
```html
<button>
  y open
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
  y close
</button>
```
## Change
```
UPDATE: button::text@2 "open" => "close"
```
