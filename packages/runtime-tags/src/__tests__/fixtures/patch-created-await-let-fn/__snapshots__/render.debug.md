# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  v:b
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
  x
</button>
```
## Change
```
UPDATE: button::text "v:b" => "x"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  x
</button>
```
## Change
```
REMOVE: button
INSERT: button
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  x
</button>
```
## Change
```
REMOVE: button
INSERT: button
```
