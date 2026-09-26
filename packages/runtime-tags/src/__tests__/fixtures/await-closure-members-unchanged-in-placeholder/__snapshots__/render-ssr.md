# Render
```html
<button>
  inc
</button>
loading...
```

# Update
```html
<button>
  inc
</button>
<span>
  2
</span>
```
## Change
```
INSERT: span::text("2")
REMOVE: ::text("loading...")
INSERT: button + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<span>
  3
</span>
```
## Change
```
UPDATE: span::text "2" => "3"
```
