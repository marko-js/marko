# Render `{"show":false,"v":"a"}`
```html
<button>
  toggle
</button>
```

# Update `{"show":true,"v":"b"}`
```html
<button>
  toggle
</button>
<span>
  b
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text " " => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<span>
  b
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text " " => "b"
```

# Update `{"show":true,"v":"c"}`
```html
<button>
  toggle
</button>
<span>
  c
</span>
```
## Change
```
UPDATE: span::text "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + span
```

# Update `{"show":true,"v":"d"}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<span>
  d
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text " " => "d"
```
