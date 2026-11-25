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
REMOVE: ::text("loading...")
INSERT: span
INSERT: span::text("2")
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
