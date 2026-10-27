# Render `{"alt":false,"label":"a"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
<i>
  B a
</i>
```

# Update `{"alt":true,"label":"b"}`
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
INSERT: p + em
REMOVE: em + i
UPDATE: em::text@2 "" => "b"
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
<em>
  A b
</em>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"alt":false,"label":"c"}`
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
  2
</button>
<i>
  B c
</i>
```
## Change
```
UPDATE: button::text "1" => "2"
REMOVE: i + p
REMOVE: i + i
INSERT: button + i
UPDATE: i::text@2 "" => "c"
```

# Update `{"alt":true,"label":"d"}`
```html
<button>
  2
</button>
<em>
  A d
</em>
```
## Change
```
INSERT: button + em
REMOVE: em + i
UPDATE: em::text@2 "" => "d"
```
