# Render `{"show":true,"promise":{"value":"hi"}}`
```html
<span>
  function
</span>
```

# Update
```html
<span>
  function
</span>
<em>
  hi
</em>
```
## Change
```
INSERT: span + em
INSERT: em::text("hi")
```

# Update `{"show":true,"promise":{"value":"ho"}}`
```html
<span>
  function
</span>
<em>
  ho
</em>
```
## Change
```
UPDATE: em::text "hi" => "ho"
```
