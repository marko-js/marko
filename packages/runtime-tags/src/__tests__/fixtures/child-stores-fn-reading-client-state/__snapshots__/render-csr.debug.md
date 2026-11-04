# Render `{"label":"a","x":0}`
```html
<button>
  more
</button>
<span>
  0
</span>
```
## Console
```
LOG "run" "f:a0"
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "run" "f:a1"
```

# Update `{"label":"a","x":1}`
```html
<button>
  more
</button>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
```

# Update `{"label":"b","x":1}`
## Console
```
LOG "run" "f:b1"
```
