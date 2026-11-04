# Render `{"a":"A","items":[1,2],"x":true}`
```html
<em>
  A1
</em>
<em>
  A2
</em>
<button>
  0
</button>
```

# Update `{"a":"B","items":[1,2],"x":true}`
```html
<em>
  B1
</em>
<em>
  B2
</em>
<button>
  0
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "A1" => "B1"
UPDATE: em:nth-of-type(2)::text "A2" => "B2"
```

# Update `{"a":"B","items":[1,2],"x":false}`
```html
<button>
  0
</button>
```
## Change
```
REMOVE: em
REMOVE: em
```

# Update `{"a":"C","items":[1,2],"x":true}`
```html
<em>
  C1
</em>
<em>
  C2
</em>
<button>
  0
</button>
```
## Change
```
INSERT: em
INSERT: em:nth-of-type(1) + em
```
