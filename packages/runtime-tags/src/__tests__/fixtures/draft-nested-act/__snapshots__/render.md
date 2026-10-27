# Render
```html
<button>
  1 
</button>
```

# Update
```js
click(document);
```
```html
<button>
  4 4
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "4"
UPDATE: button::text@2 "" => "4"
```

# Update
```html
<button>
  1 4
</button>
```
## Change
```
UPDATE: button::text@0 "4" => "1"
```
