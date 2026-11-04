# Render `{"show":false}`

# Update `{"show":true}`
```html
<b>
  11
</b>
<button>
  set
</button>
```
## Change
```
INSERT: b
INSERT: b + button
UPDATE: b::text " " => "11"
```

# Update
```js
document.querySelector("button").click();
```
```html
<b>
  15
</b>
<button>
  set
</button>
```
## Change
```
UPDATE: b::text "11" => "15"
```

# Update `{"show":true}`

# Update `{"show":false}`
## Change
```
REMOVE: b
REMOVE: button
```

# Update `{"show":true}`
```html
<b>
  11
</b>
<button>
  set
</button>
```
## Change
```
INSERT: b
INSERT: b + button
UPDATE: b::text " " => "11"
```
