# Render `{"show":true,"label":"a","rest":{"label":"a"}}`
```html
<em>
  a
</em>
<em>
  a!
</em>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  a
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em + em
```

# Update `{"show":true,"label":"b","rest":{"label":"b"}}`
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
UPDATE: em::text "a" => "b"
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
  b!
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(2)::text " " => "b!"
```

# Update `{"show":true,"label":"c","rest":{"label":"c"}}`
```html
<em>
  c
</em>
<em>
  c!
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "b" => "c"
UPDATE: em:nth-of-type(2)::text "b!" => "c!"
```

# Update
```js
document.querySelector("button").click();
```
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
REMOVE: em + em
```
