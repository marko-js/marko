# Render `{"show":false}`

# Update `{"show":true}`
```html
<button>
  set
</button>
<span>
  2
</span>
```
## Change
```
INSERT: button
INSERT: button + span
UPDATE: span::text " " => "2"
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
  6
</span>
```
## Change
```
UPDATE: span::text "2" => "6"
```

# Update `{"show":true}`
```html
<button>
  set
</button>
<span>
  6
</span>
```
## Change
```
REMOVE: button + span
INSERT: button + span
```
