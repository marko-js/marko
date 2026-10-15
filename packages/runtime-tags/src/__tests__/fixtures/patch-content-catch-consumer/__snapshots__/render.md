# Render `{"fail":false,"label":"a"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
<p>
  ok
</p>
```

# Update `{"fail":true,"label":"b"}`
```html
<button>
  0
</button>
<em>
  b 0
</em>
<b>
  SHOWN_message
</b>
<i>
  b 0
</i>
```
## Change
```
REMOVE: em + p
INSERT: em + b
REMOVE: i + p
UPDATE: b::text " " => "SHOWN_message"
INSERT: b + i
UPDATE: i::text@0 "" => "b"
UPDATE: i::text@2 "" => "0"
UPDATE: i::text@0 "a" => "b"
INSERT: button + em
UPDATE: em::text@0 "" => "b"
UPDATE: em::text@2 "" => "0"
```

# Update `{"fail":true,"label":"c"}`
```html
<button>
  0
</button>
<em>
  c 0
</em>
<b>
  SHOWN_message
</b>
<i>
  c 0
</i>
```
## Change
```
INSERT: button + p
REMOVE: p + em
REMOVE: em + p
INSERT: em + p
REMOVE: p + b
REMOVE: p + i
INSERT: em + b
REMOVE: i + p
UPDATE: b::text " " => "SHOWN_message"
INSERT: b + i
UPDATE: i::text@0 "" => "c"
UPDATE: i::text@2 "" => "0"
UPDATE: i::text@0 "b" => "c"
INSERT: button + em
UPDATE: em::text@0 "" => "c"
UPDATE: em::text@2 "" => "0"
```

# Update `{"fail":false,"label":"d"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
<p>
  ok
</p>
```
## Change
```
INSERT: button + p
REMOVE: p:nth-of-type(1) + em
UPDATE: p:nth-of-type(1)::text " " => "ok"
INSERT: p:nth-of-type(1) + p
REMOVE: p:nth-of-type(2) + b
REMOVE: p:nth-of-type(2) + i
UPDATE: p:nth-of-type(2)::text " " => "ok"
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
<p>
  ok
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"fail":true,"label":"e"}`
```html
<button>
  1
</button>
<em>
  e 1
</em>
<b>
  SHOWN_message
</b>
<i>
  e 1
</i>
```
## Change
```
REMOVE: em + p
INSERT: em + b
REMOVE: i + p
UPDATE: b::text " " => "SHOWN_message"
INSERT: b + i
UPDATE: i::text@0 "" => "e"
UPDATE: i::text@2 "" => "1"
UPDATE: i::text@0 "d" => "e"
INSERT: button + em
UPDATE: em::text@0 "" => "e"
UPDATE: em::text@2 "" => "1"
```
