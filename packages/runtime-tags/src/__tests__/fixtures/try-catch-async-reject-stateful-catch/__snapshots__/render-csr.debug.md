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
UPDATE: button::text@0 "" => "nope"
UPDATE: button::text@5 "" => "0"
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
