# Render `{"x":true}`
```html
Hello
<div>
  1
</div>
```

# Update `{"x":false}`
```html
Goodbye
<div>
  2
</div>
```
## Change
```
UPDATE: div::text "1" => "2"
INSERT: ::text("Goodbye")
REMOVE: ::text + ::text("Hello")
```

# Update `{"x":true}`
```html
Hello
<div>
  1
</div>
```
## Change
```
UPDATE: div::text "2" => "1"
INSERT: ::text("Hello")
REMOVE: ::text + ::text("Goodbye")
```
