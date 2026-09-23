# Render
```html
<button>
  ab:2
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  ab:2
</button>
<button>
  cde:3
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(2)::text@0 "" => "cde"
UPDATE: button:nth-of-type(2)::text@4 "" => "3"
```
