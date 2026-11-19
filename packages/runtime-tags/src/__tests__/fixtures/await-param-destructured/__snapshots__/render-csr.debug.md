# Render `{"user":{"name":"a","tags":["x","y"]}}`
```html
<button>
  0
</button>
```

# Update
```html
<button>
  0
</button>
<span>
  a:x:0
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text@0 "" => "a"
UPDATE: span::text@2 "" => "x"
UPDATE: span::text@4 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<span>
  a:x:1
</span>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: span::text@4 "0" => "1"
```
