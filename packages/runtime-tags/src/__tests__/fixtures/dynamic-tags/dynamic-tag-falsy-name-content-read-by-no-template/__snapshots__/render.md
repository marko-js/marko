# Render
```html
Hello
<button />
```

# Update `click("button")`
```html
<div>
  A 1
</div>
<button />
```
## Change
```
INSERT: div
REMOVE: div + ::text("Hello")
UPDATE: div::text@2 "" => "1"
```

# Update `click("button")`
```html
Hello
<button />
```
## Change
```
INSERT: ::text("Hello")
REMOVE: ::text + div
```
