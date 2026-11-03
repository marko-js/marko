# Render `{"label":"a"}`
```html
<p>
  a
</p>
<button>
  0
</button>
```

# Update `{"label":"b"}`
## Error
```
effect failed
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  b
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```
