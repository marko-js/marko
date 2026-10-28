# Render `{"show":false}`

# Update `{"show":true}`
```html
<button>
  tab=0
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
  tab=1
</button>
```
## Change
```
UPDATE: button::text@4 "0" => "1"
```
