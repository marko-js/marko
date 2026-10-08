# Render `{"show":false,"promise":{}}`

# Update `{"show":true,"promise":{}}`
```html
<button>
  b 3 closed
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
  b 4 open
</button>
```
## Change
```
UPDATE: button::text@2 "3" => "4"
UPDATE: button::text@4 "closed" => "open"
```
