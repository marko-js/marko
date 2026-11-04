# Render `{"a":"x","b":"1"}`
```html
<button>
  toggle
</button>
<p>
  x1
</p>
```

# Update `{"a":"y","b":"2"}`
```html
<button>
  toggle
</button>
<p>
  y2
</p>
```
## Change
```
UPDATE: p::text "x1" => "y2"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + p
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button>
  toggle
</button>
<p>
  y2
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "y2"
```

# Update `{"a":"z","b":"3"}`
```html
<button>
  toggle
</button>
<p>
  z3
</p>
```
## Change
```
UPDATE: p::text "y2" => "z3"
```
