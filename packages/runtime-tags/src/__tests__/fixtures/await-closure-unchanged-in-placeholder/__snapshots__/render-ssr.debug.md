# Render
```html
<button>
  set
</button>
loading...
```

# Update
```html
<button>
  set
</button>
<span>
  1
</span>
```
## Change
```
REMOVE: ::text("loading...")
INSERT: span
INSERT: span::text("1")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  set
</button>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
```
