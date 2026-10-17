# Render

# Update
```html
<button>
  0
</button>
```
## Change
```
INSERT: button
```

# Update
```html
loading
```
## Change
```
INSERT: ::text("loading")
REMOVE: ::text + button
```

# Update
```html
<button>
  0
</button>
<p>
  done
</p>
```
## Change
```
INSERT: button, p
REMOVE: p + ::text("loading")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  done
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```
