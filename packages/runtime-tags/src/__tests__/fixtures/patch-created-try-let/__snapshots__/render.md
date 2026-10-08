# Render `{"show":false}`

# Update `{"show":true}`
```html
<button>
  open
</button>
```
## Change
```
INSERT: button
UPDATE: button::text " " => "open"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  close
</button>
```
## Change
```
UPDATE: button::text "open" => "close"
```
