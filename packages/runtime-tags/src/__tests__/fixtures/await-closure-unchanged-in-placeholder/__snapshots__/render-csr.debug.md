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
INSERT: ::text("loading...")
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
