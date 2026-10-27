# Render `{"attrs":{"label":"a"}}`
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

# Update `{"attrs":{"label":"b"}}`
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
<b
  label="b"
/>
<button>
  toggle
</button>
```
## Change
```
INSERT: em + b
REMOVE: b + em
UPDATE: b[label] null => "b"
```

# Update `{"attrs":{"label":"c"}}`
```html
<em>
  c
</em>
<b
  label="c"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "b" => "c"
UPDATE: b[label] "b" => "c"
```
