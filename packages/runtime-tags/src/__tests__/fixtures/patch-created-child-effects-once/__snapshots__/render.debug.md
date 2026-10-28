# Render `{"msg":"a"}`
```html
<button>
  0
</button>
```

# Update
```js
container.querySelector("button").click();
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

# Update `{"show":true,"msg":"b"}`
```html
<button>
  1
</button>
<span>
  b 1
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text@2 "" => "1"
```
## Console
```
LOG "setup"
LOG "label" "b"
LOG "count" 1
```

# Update `{"show":true,"msg":"c"}`
```html
<button>
  1
</button>
<span>
  c 1
</span>
```
## Change
```
UPDATE: span::text@0 "b" => "c"
```
## Console
```
LOG "label" "c"
```
