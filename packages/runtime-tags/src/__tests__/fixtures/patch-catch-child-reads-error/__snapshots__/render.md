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
UPDATE: span::text@15 "" => "0"
UPDATE: span::text@17 "" => "b"
```

# Update `{"error":{},"label":"c"}`
```html
<button>
  0
</button>
<span>
  SHOWN_message2 0 c
</span>
```
## Change
```
INSERT: button + p
REMOVE: p + span
INSERT: button + span
REMOVE: span + p
UPDATE: span::text@0 "" => "SHOWN_message2"
UPDATE: span::text@15 "" => "0"
UPDATE: span::text@17 "" => "c"
```

# Update `{"label":"d"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
```
## Change
```
INSERT: button + p
REMOVE: p + span
UPDATE: p::text " " => "ok"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  ok
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"error":{},"label":"e"}`
```html
<button>
  1
</button>
<span>
  SHOWN_message3 1 e
</span>
```
## Change
```
INSERT: button + span
REMOVE: span + p
UPDATE: span::text@0 "" => "SHOWN_message3"
UPDATE: span::text@15 "" => "1"
UPDATE: span::text@17 "" => "e"
UPDATE: span::text@15 "0" => "1"
```
