# Render `{"show":false,"open":true,"label":"a"}`
```html
<b>
  a!
</b>
<button>
  toggle
</button>
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em>
  b
</em>
<b>
  b!
</b>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: b::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em + b
```

# Update `{"show":true,"open":true,"label":"c"}`
```html
<em>
  c
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "b" => "c"
```

# Update `{"show":false,"open":true,"label":"d"}`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
```

# Update `{"show":true,"open":true,"label":"e"}`
```html
<em>
  e
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
```
