# Render `{"fail":false,"label":"a"}`
```html
<span>
  ok
</span>
<em>
  a!
</em>
<button>
  toggle
</button>
```

# Update `{"fail":true,"label":"b"}`
```html
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
REMOVE: em:nth-of-type(1) + span
UPDATE: em:nth-of-type(2)::text "a!" => "b!"
INSERT: em
UPDATE: em:nth-of-type(1)::text " " => "b"
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
REMOVE: em + em
```

# Update `{"fail":true,"label":"c"}`
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

# Update `{"fail":true,"label":"e"}`
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
UPDATE: em::text "c" => "e"
```

# Update `{"fail":false,"label":"d"}`

## Patch rejected (navigate)
