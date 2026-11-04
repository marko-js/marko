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
<b>
  B
</b>
```
## Change
```
INSERT: button + b
UPDATE: b::text " " => "B"
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
REMOVE: button + b
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<b>
  B
</b>
```
## Change
```
INSERT: button + b
UPDATE: b::text " " => "B"
```

# Update `{"show":true,"v":"c"}`
```html
<button>
  toggle
</button>
<b>
  C
</b>
```
## Change
```
UPDATE: b::text "B" => "C"
```
