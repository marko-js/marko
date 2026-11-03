# Render `{"label":"a"}`
```html
<button>
  none
</button>
```

# Update `{"label":"b"}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
```
## Change
```
UPDATE: button::text "none" => "b"
```

# Update `{"label":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  c
</button>
```
## Change
```
UPDATE: button::text "b" => "c"
```
