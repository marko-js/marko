# Render `{"a":true,"label":"one"}`
```html
<button>
  toggle
</button>
<b>
  local
</b>
```

# Update `{"a":true,"label":"two"}`
```html
<button>
  toggle
</button>
<b>
  local
</b>
<em>
  two
</em>
```
## Change
```
INSERT: b + em
```

# Update `{"a":false,"label":"three"}`
```html
<button>
  toggle
</button>
<b>
  local
</b>
<b>
  three
</b>
```
## Change
```
INSERT: b:nth-of-type(1) + b
REMOVE: b:nth-of-type(2) + em
UPDATE: b:nth-of-type(2)::text " " => "three"
```

# Update `{"a":true,"label":"two"}`
```html
<button>
  toggle
</button>
<b>
  local
</b>
<em>
  two
</em>
```
## Change
```
REMOVE: em + b
INSERT: b + em
UPDATE: em::text " " => "two"
```
