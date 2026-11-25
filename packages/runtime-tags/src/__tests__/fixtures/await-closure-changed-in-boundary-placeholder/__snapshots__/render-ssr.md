# Render
```html
<button>
  inc
</button>
loading...
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  inc
</button>
<span>
  2
</span>
<b>
  2
</b>
```
## Change
```
REMOVE: ::text("loading...")
INSERT: span, b
INSERT: b::text("2")
UPDATE: b::text "1" => "2"
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
<b>
  3
</b>
```
## Change
```
UPDATE: span::text "2" => "3"
UPDATE: b::text "2" => "3"
```
