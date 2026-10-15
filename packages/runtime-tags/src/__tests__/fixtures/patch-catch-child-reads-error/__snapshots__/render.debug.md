# Render `{"label":"a"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
```

# Update `{"error":{},"label":"b"}`
```html
<button>
  0
</button>
<span>
  SHOWN_message1 0 b
</span>
```
## Change
```
INSERT: button + span
REMOVE: span + p
UPDATE: span::text@0 "" => "SHOWN_message1"
UPDATE: span::text@17 "" => "b"
UPDATE: span::text@15 "" => "0"
```

# Update `{"error":{},"label":"c"}`
```html
<button>
  0
</button>
<span>
  SHOWN_message1 0 c
</span>
```
## Change
```
UPDATE: span::text@17 "b" => "c"
```

# Update `{"label":"d"}`
```html
<button>
  0
</button>
<span>
  SHOWN_message1 0 d
</span>
```
## Change
```
UPDATE: span::text@17 "c" => "d"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<span>
  SHOWN_message1 1 d
</span>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: span::text@15 "0" => "1"
```

# Update `{"error":{},"label":"e"}`
```html
<button>
  1
</button>
<span>
  SHOWN_message1 1 e
</span>
```
## Change
```
UPDATE: span::text@17 "d" => "e"
```
