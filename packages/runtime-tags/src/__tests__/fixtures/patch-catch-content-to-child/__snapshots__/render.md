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
<div>
  <span>
    SHOWN_message1 0 b
  </span>
</div>
```
## Change
```
INSERT: button + div
REMOVE: div + p
INSERT: div > span
UPDATE: div > span::text@0 "" => "SHOWN_message1"
UPDATE: div > span::text@17 "" => "b"
UPDATE: div > span::text@15 "" => "0"
```

# Update `{"error":{},"label":"c"}`
```html
<button>
  0
</button>
<div>
  <span>
    SHOWN_message2 0 c
  </span>
</div>
```
## Change
```
INSERT: button + p
REMOVE: p + div
INSERT: button + div
REMOVE: div + p
INSERT: div > span
UPDATE: div > span::text@0 "" => "SHOWN_message2"
UPDATE: div > span::text@17 "" => "c"
UPDATE: div > span::text@15 "" => "0"
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
REMOVE: p + div
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
<div>
  <span>
    SHOWN_message3 1 e
  </span>
</div>
```
## Change
```
INSERT: button + div
REMOVE: div + p
INSERT: div > span
UPDATE: div > span::text@0 "" => "SHOWN_message3"
UPDATE: div > span::text@17 "" => "e"
UPDATE: div > span::text@15 "" => "1"
```
