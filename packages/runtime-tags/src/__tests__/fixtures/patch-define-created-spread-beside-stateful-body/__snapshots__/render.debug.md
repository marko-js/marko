# Render `{"show":false,"a":{"isOpen":true},"b":{"label":"a"},"label":"a"}`
```html
<em>
  a!
</em>
<button>
  toggle
</button>
```

# Update `{"show":true,"a":{"isOpen":true},"b":{"label":"b"},"label":"b"}`
```html
<em>
  b
</em>
<em>
  b
</em>
<em>
  x
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
INSERT: em
UPDATE: em:nth-of-type(4)::text "a!" => "b!"
INSERT: em:nth-of-type(1) + em
INSERT: em
UPDATE: em:nth-of-type(3)::text " " => "x"
UPDATE: em:nth-of-type(2)::text " " => "b"
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
<em>
  b
</em>
<em>
  x
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em:nth-of-type(3) + em
```

# Update `{"show":true,"a":{"isOpen":true},"b":{"label":"c"},"label":"c"}`
```html
<em>
  c
</em>
<em>
  c
</em>
<em>
  x
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "b" => "c"
UPDATE: em:nth-of-type(1)::text "b" => "c"
```
