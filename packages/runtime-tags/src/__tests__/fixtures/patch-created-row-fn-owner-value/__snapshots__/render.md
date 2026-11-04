# Render `{"n":0,"label":"a"}`

# Update `{"n":1,"label":"b"}`
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

# Update `{"n":1,"label":"c"}`
