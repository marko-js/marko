# Render `{"show":true,"label":"a","$global":{"brand":"x","serializedGlobals":["brand"]}}`
```html
<em>
  x
</em>
<span>
  x
</span>
<em>
  x
</em>
<span>
  x
</span>
<span>
  x
</span>
<em>
  a!
</em>
<span>
  a!
</span>
<button>
  toggle
</button>
```

# Update `{"show":true,"label":"a","$global":{"brand":"w","serializedGlobals":["brand"]}}`
```html
<em>
  w
</em>
<span>
  w
</span>
<em>
  w
</em>
<span>
  w
</span>
<span>
  w
</span>
<em>
  a!
</em>
<span>
  a!
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: span:nth-of-type(3)::text "x" => "w"
UPDATE: span:nth-of-type(1)::text "x" => "w"
UPDATE: em:nth-of-type(1)::text "x" => "w"
UPDATE: span:nth-of-type(2)::text "x" => "w"
UPDATE: em:nth-of-type(2)::text "x" => "w"
```

# Update `{"show":false,"label":"a","$global":{"brand":"w","serializedGlobals":["brand"]}}`
```html
<em>
  a!
</em>
<span>
  a!
</span>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
REMOVE: span
REMOVE: em
REMOVE: span
REMOVE: span
```

# Update `{"show":true,"label":"b","$global":{"brand":"y","serializedGlobals":["brand"]}}`
```html
<em>
  y
</em>
<span>
  y
</span>
<em>
  y
</em>
<span>
  y
</span>
<span>
  y
</span>
<em>
  b!
</em>
<span>
  b!
</span>
<button>
  toggle
</button>
```
## Change
```
INSERT: span, em, span, span
UPDATE: span:nth-of-type(4)::text "a!" => "b!"
UPDATE: em:nth-of-type(3)::text "a!" => "b!"
INSERT: em
UPDATE: span:nth-of-type(1)::text " " => "y"
UPDATE: em:nth-of-type(2)::text " " => "y"
UPDATE: em:nth-of-type(1)::text " " => "y"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  y
</em>
<span>
  y
</span>
<em>
  y
</em>
<span>
  y
</span>
<span>
  y
</span>
<span>
  -
</span>
<button>
  toggle
</button>
```
## Change
```
REMOVE: span:nth-of-type(3) + em
UPDATE: span:nth-of-type(4)::text "b!" => "-"
```

# Update `{"show":true,"label":"c","$global":{"brand":"z","serializedGlobals":["brand"]}}`
```html
<em>
  z
</em>
<span>
  z
</span>
<em>
  z
</em>
<span>
  z
</span>
<span>
  z
</span>
<span>
  -
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: span:nth-of-type(3)::text "y" => "z"
UPDATE: span:nth-of-type(1)::text "y" => "z"
UPDATE: span:nth-of-type(2)::text "y" => "z"
UPDATE: em:nth-of-type(2)::text "y" => "z"
UPDATE: em:nth-of-type(1)::text "y" => "z"
```
