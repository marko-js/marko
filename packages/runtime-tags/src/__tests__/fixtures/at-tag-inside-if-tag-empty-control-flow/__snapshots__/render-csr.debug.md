# Render `{"x":true,"list":[1]}`
```html
Hello
<div>
  1
</div>
```

# Update `{"x":false,"list":[1]}`
```html
Goodbye
<div>
  2
</div>
```
## Change
```
REMOVE: ::text("Hello")
INSERT: ::text("Goodbye")
UPDATE: div::text "1" => "2"
```

# Update `{"x":true,"list":[]}`
```html
Hello
<div>
  1
</div>
```
## Change
```
REMOVE: ::text("Goodbye")
INSERT: ::text("Hello")
UPDATE: div::text "2" => "1"
```
