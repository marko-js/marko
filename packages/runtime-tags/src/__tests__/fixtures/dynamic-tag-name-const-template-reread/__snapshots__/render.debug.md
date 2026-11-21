# Render
```html
<button>
  toggle
</button>
<div>
  A first 
</div>
<div>
  B second
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div>
  A first 
</div>
<div>
  A second Hello
</div>
```
## Change
```
INSERT: div:nth-of-type(1) + div
REMOVE: div:nth-of-type(2) + div
UPDATE: div:nth-of-type(2)::text@2 "" => "second"
INSERT: div:nth-of-type(2)::text@8 + ::text("Hello")
```
