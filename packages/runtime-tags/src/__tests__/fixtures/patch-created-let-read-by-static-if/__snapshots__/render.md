# Render `{"show":false}`

# Update `{"show":true}`
```html
<button>
  set
</button>
<span>
  1
</span>
```
## Change
```
INSERT: button
INSERT: button + span
UPDATE: span::text " " => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  set
</button>
<span>
  5
</span>
```
## Change
```
UPDATE: span::text "1" => "5"
```

# Update `{"show":true}`

# Update `{"show":false}`
## Change
```
REMOVE: button
REMOVE: span
```

# Update `{"show":true}`
```html
<button>
  set
</button>
<span>
  1
</span>
```
## Change
```
INSERT: button
INSERT: button + span
UPDATE: span::text " " => "1"
```
