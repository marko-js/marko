# Render
```html
<button>
  set
</button>
```

# Update
```html
<button>
  set
</button>
loading...
```
## Change
```
INSERT: button + ::text("loading...")
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
INSERT: button + span
REMOVE: span + ::text("loading...")
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
