# Render

# Update
```html
<button>
  loading 0
</button>
```
## Change
```
INSERT: button
UPDATE: button::text@8 "" => "0"
```

# Update
```html
<button>
  loaded 0
</button>
```
## Change
```
INSERT: button
REMOVE: button + button
UPDATE: button::text@7 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  loaded 1
</button>
```
## Change
```
UPDATE: button::text@7 "0" => "1"
```
