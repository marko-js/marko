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
INSERT: button + em
UPDATE: i::text@2 "" => "0"
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
UPDATE: i::text@0 "b" => "c"
UPDATE: em::text@0 "b" => "c"
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
  c 1
</em>
<b>
  SHOWN_message
</b>
<i>
  c 1
</i>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: i::text@2 "0" => "1"
UPDATE: em::text@2 "0" => "1"
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
UPDATE: i::text@0 "c" => "e"
UPDATE: em::text@0 "c" => "e"
```

# Update `{"fail":false,"label":"d"}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
