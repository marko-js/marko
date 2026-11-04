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
<button>
  own:0
</button>
```
## Change
```
INSERT: b, button, button
REMOVE: button:nth-of-type(2) + p
UPDATE: button:nth-of-type(1)::text@2 "" => "0"
UPDATE: button:nth-of-type(2)::text@4 "" => "0"
UPDATE: b::text " " => "SHOWN_x"
UPDATE: button:nth-of-type(1)::text@0 "" => "b"
```

# Update
```html
<b>
  SHOWN_x
</b>
<button>
  b:0
</button>
<button>
  b:0
</button>
<button>
  own:0
</button>
<button>
  b:0
</button>
```
## Change
```
INSERT: b + button
INSERT: button:nth-of-type(3) + button
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<b>
  SHOWN_x
</b>
<button>
  b:1
</button>
<button>
  b:1
</button>
<button>
  own:1
</button>
<button>
  b:1
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@2 "0" => "1"
UPDATE: button:nth-of-type(2)::text@2 "0" => "1"
UPDATE: button:nth-of-type(3)::text@4 "0" => "1"
UPDATE: button:nth-of-type(4)::text@2 "0" => "1"
```
