# Render

# Update
```html
<button>
  nope 0
</button>
```
## Change
```
INSERT: button
UPDATE: button::text@5 "" => "0"
UPDATE: button::text@0 "" => "nope"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  nope 1
</button>
```
## Change
```
UPDATE: button::text@5 "0" => "1"
```
