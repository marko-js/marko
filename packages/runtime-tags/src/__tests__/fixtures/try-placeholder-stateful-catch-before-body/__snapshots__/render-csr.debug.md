# Render

# Update
```html
<button>
  retry 1
</button>
```
## Change
```
INSERT: button
UPDATE: button::text@6 "" => "1"
```
## Console
```
LOG "placeholder mounted"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  retry 2
</button>
```
## Change
```
UPDATE: button::text@6 "1" => "2"
```

# Update
## Change
```
REMOVE: button
```
## Console
```
LOG "placeholder destroyed"
```

# Update
```html
<b>
  nope
</b>
```
## Change
```
INSERT: b
UPDATE: b::text " " => "nope"
```
