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
REMOVE: ::text("Hello")
INSERT: ::text("Goodbye")
UPDATE: div::text "1" => "2"
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
REMOVE: ::text("Goodbye")
INSERT: ::text("Hello")
UPDATE: div::text "2" => "1"
```
