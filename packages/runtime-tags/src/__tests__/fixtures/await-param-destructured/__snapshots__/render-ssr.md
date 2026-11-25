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
INSERT: span
INSERT: span::text("a:x:")
INSERT: span::text("0")
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
