# Render

# Update
## Console
```
LOG "child"
```

# Update
```html
<button>
  count:0
</button>
```
## Change
```
INSERT: button
```
## Console
```
LOG "grand-child"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  count:1
</button>
```
## Change
```
UPDATE: button::text@6 "0" => "1"
```
