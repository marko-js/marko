# Render `{"items":["a","b","c"],"selected":0}`
```html
<button>
  a 0
</button>
```

# Update `{"items":["a","b","c"],"selected":1}`
```html
<button>
  b 0
</button>
```
## Change
```
REMOVE: button
INSERT: button
UPDATE: button::text@2 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b 1
</button>
```
## Change
```
UPDATE: button::text@2 "0" => "1"
```
