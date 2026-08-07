# Render
```html
<div>
  0
</div>
```

# Update
```js
document
.querySelector("div") 
.dispatchEvent(
  new (document.defaultView).CustomEvent("x", { bubbles: true }),
);
```
```html
<div>
  1
</div>
```
## Change
```
UPDATE: div::text "0" => "1"
```
