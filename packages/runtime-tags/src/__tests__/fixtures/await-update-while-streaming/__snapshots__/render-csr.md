# Render
```html
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update
```html
<button>
  1
</button>
loading
```
## Change
```
INSERT: button + ::text("loading")
```

# Update
```html
<button>
  1
</button>
<div>
  1
</div>
```
## Change
```
INSERT: button + div
REMOVE: div + ::text("loading")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<div>
  1
</div>
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update
```html
<button>
  2
</button>
<div>
  2
</div>
```
## Change
```
UPDATE: div::text "1" => "2"
```
