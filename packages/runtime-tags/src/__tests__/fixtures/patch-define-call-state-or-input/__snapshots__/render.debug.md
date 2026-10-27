# Render `{"label":"a","show":false}`
```html
<button>
  toggle
</button>
```

# Update `{"label":"b","show":true}`
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
INSERT: em
UPDATE: em::text " " => "b"
```

# Update `{"label":"c","show":false}`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
```

# Update
```js
d.querySelector("button").click();
```
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
INSERT: em
UPDATE: em::text " " => "c"
```

# Update `{"label":"d","show":true}`
```html
<em>
  d
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "c" => "d"
```

# Update
```js
d.querySelector("button").click();
```

# Update `{"label":"e","show":false}`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
```

# Update `{"label":"f","show":true}`
```html
<em>
  f
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "f"
```
