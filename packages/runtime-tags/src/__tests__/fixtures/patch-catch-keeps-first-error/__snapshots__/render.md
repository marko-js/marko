# Render `{"fail":false,"msg":"a","label":"L1"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
```

# Update `{"fail":true,"msg":"b","label":"L2"}`
```html
<button>
  0
</button>
<span>
  b|0|L2
</span>
```
## Change
```
INSERT: button + span
REMOVE: span + p
UPDATE: span::text@0 "" => "b"
UPDATE: span::text@4 "" => "L2"
UPDATE: span::text@2 "" => "0"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<span>
  b|1|L2
</span>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: span::text@2 "0" => "1"
```

# Update `{"fail":true,"msg":"c","label":"L3"}`
```html
<button>
  1
</button>
<span>
  b|1|L3
</span>
```
## Change
```
UPDATE: span::text@4 "L2" => "L3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<span>
  b|2|L3
</span>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: span::text@2 "1" => "2"
```

# Update `{"fail":false,"msg":"d","label":"L4"}`

## Patch rejected (navigate)
