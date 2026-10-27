# Render `{"show":false}`

# Update `{"show":true,"error":{},"label":"a"}`
```html
<div>
  <span>
    SHOWN_message1 a
  </span>
</div>
```
## Change
```
INSERT: div
```

# Update `{"show":true,"error":{},"label":"b"}`
```html
<div>
  <span>
    SHOWN_message1 b
  </span>
</div>
```
## Change
```
UPDATE: div > span::text@15 "a" => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<div>
  <span>
    SHOWN_message1 c
  </span>
</div>
```
## Change
```
UPDATE: div > span::text@15 "b" => "c"
```
