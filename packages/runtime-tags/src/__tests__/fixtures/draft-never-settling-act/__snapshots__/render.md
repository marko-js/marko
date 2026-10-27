# Render
```html
<button>
  1 1
</button>
```

# Update
```js
click(document);
```
```html
<button>
  stuck quick
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "stuck"
UPDATE: button::text@6 "1" => "quick"
```

# Update
```html
<button>
  stuck 1
</button>
```
## Change
```
UPDATE: button::text@6 "quick" => "1"
```
