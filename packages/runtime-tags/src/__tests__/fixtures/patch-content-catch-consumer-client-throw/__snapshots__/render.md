# Render `{"label":"a"}`
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

# Update `{"label":"b"}`

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

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<em>
  b
</em>
<b>
  SHOWN_message
</b>
<i>
  b
</i>
```
## Change
```
UPDATE: button::text "1" => "2"
REMOVE: em + p
INSERT: em + b
REMOVE: i + p
UPDATE: b::text " " => "SHOWN_message"
INSERT: button + em
INSERT: b + i
UPDATE: em::text " " => "b"
UPDATE: i::text " " => "b"
```

# Update `{"label":"c"}`
```html
<button>
  2
</button>
<em>
  c
</em>
<b>
  SHOWN_message
</b>
<i>
  c
</i>
```
## Change
```
INSERT: button + p
REMOVE: p + em
UPDATE: p::text " " => "ok"
INSERT: em + p
REMOVE: p + b
REMOVE: p + i
UPDATE: p::text " " => "ok"
REMOVE: em + p
INSERT: em + b
REMOVE: i + p
UPDATE: b::text " " => "SHOWN_message"
INSERT: button + em
INSERT: b + i
UPDATE: em::text " " => "c"
UPDATE: i::text " " => "c"
```
