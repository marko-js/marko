# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  f:b
</button>
```
## Change
```
INSERT: button
UPDATE: button::text " " => "f:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  -
</button>
```
## Change
```
UPDATE: button::text "f:b" => "-"
```

# Update `{"show":true,"label":"c"}`
