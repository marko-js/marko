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
    SHOWN_message1 0 c
  </span>
</div>
```
## Change
```
UPDATE: div > span::text@17 "b" => "c"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<div>
  <span>
    SHOWN_message1 1 c
  </span>
</div>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: div > span::text@15 "0" => "1"
```

# Update `{"error":{},"label":"e"}`
```html
<button>
  1
</button>
<div>
  <span>
    SHOWN_message1 1 e
  </span>
</div>
```
## Change
```
UPDATE: div > span::text@17 "c" => "e"
```

# Update `{"label":"d"}`

## Patch rejected (navigate)
