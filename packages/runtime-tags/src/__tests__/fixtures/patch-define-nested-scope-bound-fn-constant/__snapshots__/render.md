# Render `{"label":"a"}`
```html
<button>
  a
</button>
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "clicked"
```

# Update `{"label":"b"}`
```html
<button>
  b
</button>
```
## Change
```
UPDATE: button::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "clicked"
```
