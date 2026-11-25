# Render
```html
<button>
  retry 1
</button>
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
REMOVE: button
INSERT: b
UPDATE: b::text " " => "nope"
UPDATE: button::text@6 "1" => "2"
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
INSERT: t > p::text("body")
```
