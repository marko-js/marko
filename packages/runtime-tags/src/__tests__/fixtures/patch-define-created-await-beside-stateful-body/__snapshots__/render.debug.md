# Render `{"show":false,"label":"a","promise":{}}`
```html
<em>
  a!
</em>
<button>
  toggle
</button>
```

# Update `{"show":true,"label":"b","promise":{}}`
```html
<em>
  q
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
INSERT: em, em
UPDATE: em:nth-of-type(3)::text "a!" => "b!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  q
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

# Update `{"show":true,"label":"c","promise":{}}`
```html
<em>
  r
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
UPDATE: em:nth-of-type(1)::text "q" => "r"
UPDATE: em:nth-of-type(2)::text "b" => "c"
```
