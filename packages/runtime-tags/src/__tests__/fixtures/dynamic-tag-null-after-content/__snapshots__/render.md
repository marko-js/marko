# Render
```html
<button>
  0
</button>
<b>
  outer
</b>
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
REMOVE: button + b
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<b>
  outer
</b>
```
## Change
```
UPDATE: button::text "1" => "2"
INSERT: button + b
```
