# Render
```html
<button>
  ab:String
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  ab:String
</button>
<button>
  cde:String
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(2)::text@0 "" => "cde"
UPDATE: button:nth-of-type(2)::text@4 "" => "String"
```
