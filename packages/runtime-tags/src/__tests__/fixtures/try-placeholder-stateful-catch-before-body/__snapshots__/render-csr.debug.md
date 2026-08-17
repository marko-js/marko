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
<b>
  nope
</b>
```
## Change
```
UPDATE: button::text@6 "1" => "2"
REMOVE: button
INSERT: b
UPDATE: b::text " " => "nope"
```
## Console
```
LOG "placeholder destroyed"
```
