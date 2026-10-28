# Render `{"show":true,"label":"b"}`
```html
<button>
  f:b
</button>
```

# Update
```js
d.querySelector("button")?.click();
```
```html
<button>
  x
</button>
```
## Change
```
UPDATE: button::text "f:b" => "x"
```
