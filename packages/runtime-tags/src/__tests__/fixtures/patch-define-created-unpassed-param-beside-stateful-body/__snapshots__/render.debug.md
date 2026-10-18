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
  b!
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "a!" => "b!"
INSERT: em
UPDATE: em:nth-of-type(1)::text "" => "b"
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

# Update `{"show":true,"open":true,"label":"c"}`
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
  e
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em::text "" => "e"
```
