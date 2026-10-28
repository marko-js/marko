# Render `{"label":"a"}`
```html
<p>
  ok
</p>
```

# Update `{"error":{},"label":"b"}`
```html
<b>
  SHOWN_x
</b>
<button>
  b:0
</button>
```
## Change
```
INSERT: b, button
REMOVE: button + p
UPDATE: b::text " " => "SHOWN_x"
UPDATE: button::text@0 "" => "b"
UPDATE: button::text@2 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<b>
  SHOWN_x
</b>
<button>
  b:1
</button>
```
## Change
```
UPDATE: button::text@2 "0" => "1"
```

# Update `{"error":{},"label":"c"}`
```html
<b>
  SHOWN_x
</b>
<button>
  c:1
</button>
```
## Change
```
UPDATE: button::text@0 "b" => "c"
```
