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
  6 6
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "6"
UPDATE: button::text@2 "" => "6"
```

# Update
```html
<button>
  1 6
</button>
```
## Change
```
UPDATE: button::text@0 "6" => "1"
```
