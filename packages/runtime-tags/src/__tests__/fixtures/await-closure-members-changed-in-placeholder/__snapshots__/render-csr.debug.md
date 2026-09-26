# Render
```html
<button>
  inc
</button>
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
loading...
```
## Change
```
INSERT: button + ::text("loading...")
```

# Update
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
INSERT: button + span
REMOVE: span + ::text("loading...")
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
  4
</span>
```
## Change
```
UPDATE: span::text "3" => "4"
```
