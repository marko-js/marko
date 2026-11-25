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
REMOVE: button
INSERT: ::text("loading")
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
REMOVE: ::text("loading")
INSERT: button, p
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
