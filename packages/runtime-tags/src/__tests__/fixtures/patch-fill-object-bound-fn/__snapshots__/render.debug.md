# Render `{"label":"a"}`
```html
<button>
  a 0
</button>
```

# Update `{"label":"b"}`
```html
<button>
  b 0
</button>
```
## Change
```
UPDATE: button::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b 1
</button>
```
## Change
```
UPDATE: button::text@2 "0" => "1"
```
