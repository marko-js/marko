# Render `{"value":"a"}`
```html
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<p>
  a
</p>
<span>
  a
</span>
```
## Change
```
INSERT: button + :is(p, span)
UPDATE: span::text " " => "a"
UPDATE: p::text " " => "a"
```
## Console
```
LOG "value" "a"
```

# Update `{"value":"b"}`
```html
<button>
  toggle
</button>
<p>
  b
</p>
<span>
  b
</span>
```
## Change
```
UPDATE: span::text "a" => "b"
UPDATE: p::text "a" => "b"
```
## Console
```
LOG "value" "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + p
REMOVE: button + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<p>
  b
</p>
<span>
  b
</span>
```
## Change
```
INSERT: button + :is(p, span)
UPDATE: span::text " " => "b"
UPDATE: p::text " " => "b"
```
## Console
```
LOG "value" "b"
```

# Update `{"value":"c"}`
```html
<button>
  toggle
</button>
<p>
  c
</p>
<span>
  c
</span>
```
## Change
```
UPDATE: span::text "b" => "c"
UPDATE: p::text "b" => "c"
```
## Console
```
LOG "value" "c"
```
