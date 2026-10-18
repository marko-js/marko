# Render `{"show":false,"open":true,"label":"a"}`
```html
<em>
  a!
</em>
<button>
  toggle
</button>
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em>
  b
</em>
<em>
  b
</em>
<em>
  b!
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(3)::text "a!" => "b!"
INSERT: em
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(1)::text " " => "b"
UPDATE: em:nth-of-type(2)::text " " => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b
</em>
<em>
  b
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em:nth-of-type(2) + em
```

# Update `{"show":true,"open":true,"label":"c"}`
```html
<em>
  c
</em>
<em>
  c
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "b" => "c"
UPDATE: em:nth-of-type(2)::text "b" => "c"
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
REMOVE: em
```

# Update `{"show":true,"open":true,"label":"e"}`
```html
<em>
  e
</em>
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
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(1)::text " " => "e"
UPDATE: em:nth-of-type(2)::text " " => "e"
```
