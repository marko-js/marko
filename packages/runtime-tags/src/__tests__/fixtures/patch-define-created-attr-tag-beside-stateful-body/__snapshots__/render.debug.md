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
UPDATE: em:nth-of-type(2)::text "a!" => "b!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  x
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
  x
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
```
