# Render

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
