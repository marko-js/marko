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
```html
<button>
  inc:1
</button>
<div
  id="ref"
>
  1
</div>
```
## Change
```
REMOVE: #ref::text("0")
INSERT: #ref::text("1")
```

# Update
```js
container.querySelector("button").click();
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
REMOVE: #ref::text("1")
INSERT: #ref::text("2")
```
