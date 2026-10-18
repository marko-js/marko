# Render `{"show":false,"open":true,"label":"a"}`
```html
<em>
  a! 1
</em>
<button>
  toggle
</button>
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em>
  b 1
</em>
<em>
  b! 1
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text@0 "a!" => "b!"
INSERT: em
UPDATE: em:nth-of-type(1)::text@0 "" => "b"
UPDATE: em:nth-of-type(1)::text@2 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b 1
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em + em
```

# Update `{"show":true,"open":true,"label":"c"}`
```html
<em>
  c 1
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text@0 "b" => "c"
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
  e 1
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em::text@0 "" => "e"
UPDATE: em::text@2 "" => "1"
```
