# Render
```html
<button>
  inc
</button>
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
INSERT: ::text("loading...")
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
