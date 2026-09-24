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
INSERT: span::text("1")
REMOVE: ::text("loading...")
INSERT: button + span
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
