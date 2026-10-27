# Render `{"label":"a"}`
```html
<em>
  a
</em>
<em>
  a
</em>
<button>
  toggle
</button>
```

# Update `{"label":"b"}`
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
UPDATE: em:nth-of-type(1)::text "a" => "b"
UPDATE: em:nth-of-type(2)::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b
</em>
<i>
  b
</i>
<button>
  toggle
</button>
```
## Change
```
INSERT: em + i
REMOVE: i + em
UPDATE: i::text " " => "b"
```

# Update `{"label":"c"}`
```html
<em>
  c
</em>
<i>
  c
</i>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "b" => "c"
UPDATE: i::text "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
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
INSERT: em:nth-of-type(1) + em
REMOVE: em:nth-of-type(2) + i
UPDATE: em:nth-of-type(2)::text " " => "c"
```

# Update `{"label":"d"}`
```html
<em>
  d
</em>
<em>
  d
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "c" => "d"
UPDATE: em:nth-of-type(2)::text "c" => "d"
```
