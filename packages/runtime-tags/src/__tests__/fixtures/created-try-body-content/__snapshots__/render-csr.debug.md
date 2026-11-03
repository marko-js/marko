# Render `{"show":false,"alt":false,"label":"a"}`
```html
<button>
  0
</button>
```

# Update `{"show":true,"alt":true,"label":"b"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
<em>
  A b
</em>
```
## Change
```
INSERT: button + p
INSERT: p + em
UPDATE: p::text " " => "ok"
UPDATE: em::text@2 "" => "b"
```

# Update `{"show":true,"alt":false,"label":"c"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
<i>
  B c
</i>
```
## Change
```
INSERT: p + i
REMOVE: i + em
UPDATE: i::text@2 "" => "c"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  ok
</p>
<i>
  B c
</i>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"show":false,"alt":true,"label":"d"}`
```html
<button>
  1
</button>
```
## Change
```
REMOVE: button + p
REMOVE: button + i
```

# Update `{"show":true,"alt":true,"label":"e"}`
```html
<button>
  1
</button>
<p>
  ok
</p>
<em>
  A e
</em>
```
## Change
```
INSERT: button + p
INSERT: p + em
UPDATE: p::text " " => "ok"
UPDATE: em::text@2 "" => "e"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  2
</button>
<em>
  A e
</em>
```
## Change
```
UPDATE: button::text "1" => "2"
REMOVE: em + p
REMOVE: em + em
INSERT: button + em
UPDATE: em::text@2 "" => "e"
```

# Update `{"show":true,"alt":false,"label":"f"}`
```html
<button>
  2
</button>
<i>
  B f
</i>
```
## Change
```
INSERT: button + i
REMOVE: i + em
UPDATE: i::text@2 "" => "f"
```
