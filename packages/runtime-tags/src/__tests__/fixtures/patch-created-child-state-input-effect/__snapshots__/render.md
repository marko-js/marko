# Render `{"show":false,"x":"a"}`

# Update `{"show":true,"x":"b"}`
```html
<button>
  0
</button>
```
## Change
```
INSERT: button
```
## Console
```
LOG "child" "b" 0
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```
## Console
```
LOG "child" "b" 1
```

# Update `{"show":true,"x":"c"}`
## Console
```
LOG "child" "c" 1
```
