# Render `{"value":1}`
```html
<button>
  click
</button>
```

# Update
```html
loading...
<button>
  click
</button>
```
## Change
```
INSERT: ::text("loading...")
```

# Update
```html
<span>
  1
</span>
<button>
  click
</button>
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
<span>
  2
</span>
<button>
  click
</button>
```
## Change
```
UPDATE: span::text "1" => "2"
```
