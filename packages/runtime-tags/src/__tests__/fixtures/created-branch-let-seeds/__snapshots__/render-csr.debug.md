# Render `{"show":false,"x":1,"y":2}`

# Update `{"show":true,"x":3,"y":4}`
```html
<span>
  7
</span>
<button>
  +
</button>
```
## Change
```
INSERT: span, button
UPDATE: span::text " " => "7"
```

# Update
```js
d.querySelector("button").click();
```
```html
<span>
  8
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span::text "7" => "8"
```

# Update `{"show":true,"x":5,"y":6}`
