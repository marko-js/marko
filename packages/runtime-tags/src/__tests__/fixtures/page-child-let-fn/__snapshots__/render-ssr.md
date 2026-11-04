# Render `{"user":{"name":"SHOWN_a","passwordHash":"SECRET_SHOWN_a"}}`
```html
<button>
  f:SHOWN_a
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  x
</button>
```
## Change
```
UPDATE: button::text "f:SHOWN_a" => "x"
```
