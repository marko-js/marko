# Render `{"label":"a","other":"x"}`
```html
<button>
  0a
</button>
```
## Console
```
LOG "run" "0a" "x"
```

# Update `{"label":"b","other":"y"}`
```html
<button>
  0b
</button>
```
## Change
```
UPDATE: button::text "0a" => "0b"
```
## Console
```
LOG "run" "0b" "y"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1b
</button>
```
## Change
```
UPDATE: button::text "0b" => "1b"
```
## Console
```
LOG "run" "1b" "y"
```

# Update `{"label":"c","other":"z"}`
```html
<button>
  1c
</button>
```
## Change
```
UPDATE: button::text "1b" => "1c"
```
## Console
```
LOG "run" "1c" "z"
```

# Update `{"label":"c","other":"z"}`
