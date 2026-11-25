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
INSERT: ::text("loading...")
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
  4
</span>
```
## Change
```
UPDATE: span::text "3" => "4"
```
