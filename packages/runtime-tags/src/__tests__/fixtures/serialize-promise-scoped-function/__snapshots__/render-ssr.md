# Render
```html
<button>
  inc:1
</button>
<div
  id="ref"
>
  0
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc:2
</button>
<div
  id="ref"
>
  2
</div>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
REMOVE: #ref::text("0")
INSERT: #ref::text("2")
```

# Update
```html
<button>
  inc:2
</button>
<div
  id="ref"
>
  2
</div>
```
## Change
```
REMOVE: #ref::text("2")
INSERT: #ref::text("2")
```
