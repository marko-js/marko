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
INSERT: button + em
INSERT: b + i
UPDATE: em::text@0 "" => "b"
UPDATE: em::text@2 "" => "0"
UPDATE: i::text@0 "" => "b"
UPDATE: i::text@2 "" => "0"
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
UPDATE: em::text@0 "b" => "c"
UPDATE: i::text@0 "b" => "c"
```

# Update `{"fail":false,"label":"d"}`
```html
<button>
  0
</button>
<em>
  d 0
</em>
<b>
  SHOWN_message
</b>
<i>
  d 0
</i>
```
## Change
```
UPDATE: em::text@0 "c" => "d"
UPDATE: i::text@0 "c" => "d"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<em>
  d 1
</em>
<b>
  SHOWN_message
</b>
<i>
  d 1
</i>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: em::text@2 "0" => "1"
UPDATE: i::text@2 "0" => "1"
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
UPDATE: em::text@0 "d" => "e"
UPDATE: i::text@0 "d" => "e"
```
