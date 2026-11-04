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
  x
</button>
```
## Change
```
UPDATE: button::text "f:b" => "x"
```

# Update `{"show":true,"label":"c"}`

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"label":"d"}`
