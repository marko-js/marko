# Render `{"show":false,"open":true,"label":"a"}`
```html
<em>
  a! a
</em>
<button>
  toggle
</button>
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em>
  b b
</em>
<em>
  b b
</em>
<em>
  b! b
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em, em
UPDATE: em:nth-of-type(3)::text@3 "a" => "b"
UPDATE: em:nth-of-type(3)::text@0 "a!" => "b!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b b
</em>
<em>
  b b
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
  c c
</em>
<em>
  c c
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text@0 "b" => "c"
UPDATE: em:nth-of-type(1)::text@2 "b" => "c"
UPDATE: em:nth-of-type(2)::text@0 "b" => "c"
UPDATE: em:nth-of-type(2)::text@2 "b" => "c"
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
  e e
</em>
<em>
  e e
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em, em
```
