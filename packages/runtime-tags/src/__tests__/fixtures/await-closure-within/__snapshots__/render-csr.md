# Render

# Update
```html
loading...
```
## Change
```
INSERT: ::text("loading...")
```

# Update
```html
<button>
  1
</button>
<span>
  1
</span>
```
## Change
```
INSERT: button, span
REMOVE: span + ::text("loading...")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<span>
  2
</span>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: span::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  3
</button>
<span>
  3
</span>
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: span::text "2" => "3"
```
