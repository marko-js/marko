# Render `{"large":true,"label":"a"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
```

# Update `{"large":true,"error":{},"label":"b"}`
```html
<button>
  0
</button>
<strong>
  SHOWN_message1 0 b
</strong>
```
## Change
```
REMOVE: strong + p
INSERT: button + strong
UPDATE: strong::text@0 "" => "SHOWN_message1"
UPDATE: strong::text@15 "" => "0"
UPDATE: strong::text@17 "" => "b"
```

# Update `{"large":false,"error":{},"label":"c"}`
```html
<button>
  0
</button>
<small>
  SHOWN_message2 0 c
</small>
```
## Change
```
INSERT: button + p
REMOVE: p + strong
REMOVE: small + p
INSERT: button + small
UPDATE: small::text@0 "" => "SHOWN_message2"
UPDATE: small::text@15 "" => "0"
UPDATE: small::text@17 "" => "c"
```

# Update `{"large":false,"label":"d"}`
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
REMOVE: p + small
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

# Update `{"large":true,"error":{},"label":"e"}`
```html
<button>
  1
</button>
<strong>
  SHOWN_message3 1 e
</strong>
```
## Change
```
REMOVE: strong + p
INSERT: button + strong
UPDATE: strong::text@0 "" => "SHOWN_message3"
UPDATE: strong::text@15 "" => "1"
UPDATE: strong::text@17 "" => "e"
```
