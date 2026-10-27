# Render `{"show":false}`

# Update `{"show":true}`
```html
<button>
  1
</button>
```
## Change
```
INSERT: button
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update `{"show":true}`
