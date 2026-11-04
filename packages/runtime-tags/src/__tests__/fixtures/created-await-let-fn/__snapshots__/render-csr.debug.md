# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`

# Update
```html
<button>
  v:b
</button>
```
## Change
```
INSERT: button
UPDATE: button::text " " => "v:b"
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
UPDATE: button::text "v:b" => "x"
```

# Update `{"show":true,"label":"c"}`

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"label":"d"}`
