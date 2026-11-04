# Render `{"show":false,"a":"a","b":1}`

# Update `{"show":true,"a":"b","b":2}`
```html
<span>
  b
</span>
<button>
  3
</button>
```
## Change
```
INSERT: span, button
UPDATE: button::text " " => "3"
UPDATE: span::text " " => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  b
</span>
<button>
  4
</button>
```
## Change
```
UPDATE: button::text "3" => "4"
```

# Update `{"show":true,"a":"c","b":3}`
```html
<span>
  c
</span>
<button>
  5
</button>
```
## Change
```
UPDATE: button::text "4" => "5"
UPDATE: span::text "b" => "c"
```
