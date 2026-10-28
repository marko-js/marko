# Render `{"fail":false,"label":"a"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
```

# Update `{"fail":true,"label":"b"}`
```html
<button>
  0
</button>
<b>
  SHOWN_message
</b>
<div>
  <i>
    b 0
  </i>
</div>
```
## Change
```
INSERT: button + :is(b, div)
REMOVE: div + p
UPDATE: b::text " " => "SHOWN_message"
INSERT: div > i
UPDATE: div > i::text@0 "" => "b"
UPDATE: div > i::text@2 "" => "0"
```

# Update `{"fail":true,"label":"c"}`
```html
<button>
  0
</button>
<b>
  SHOWN_message
</b>
<div>
  <i>
    c 0
  </i>
</div>
```
## Change
```
UPDATE: div > i::text@0 "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<b>
  SHOWN_message
</b>
<div>
  <i>
    c 1
  </i>
</div>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: div > i::text@2 "0" => "1"
```

# Update `{"fail":true,"label":"e"}`
```html
<button>
  1
</button>
<b>
  SHOWN_message
</b>
<div>
  <i>
    e 1
  </i>
</div>
```
## Change
```
UPDATE: div > i::text@0 "c" => "e"
```

# Update `{"fail":false,"label":"d"}`

## Patch rejected (navigate)
