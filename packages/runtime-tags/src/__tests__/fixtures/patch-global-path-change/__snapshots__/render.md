# Render `{"$global":{"o":{"x":"a","y":1},"k":"k","serializedGlobals":["o","k"]}}`
```html
<button>
  t
</button>
<p>
  a
</p>
<div>
  ak
</div>
```

# Update `{"$global":{"o":{"x":"b","y":1},"k":"k","serializedGlobals":["o","k"]}}`
```html
<button>
  t
</button>
<p>
  b
</p>
<div>
  bk
</div>
```
## Change
```
UPDATE: p::text "a" => "b"
REMOVE: div::text("ak")
INSERT: div::text("bk")
```

# Update `{"$global":{"o":{"x":"b","y":1},"k":"l","serializedGlobals":["o","k"]}}`
```html
<button>
  t
</button>
<p>
  b
</p>
<div>
  bl
</div>
```
## Change
```
REMOVE: div::text("bk")
INSERT: div::text("bl")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<div>
  bl
</div>
```
## Change
```
REMOVE: button + p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<p>
  b
</p>
<div>
  bl
</div>
```
## Change
```
INSERT: button + p
```

# Update `{"$global":{"o":{"x":"c","y":1},"k":"l","serializedGlobals":["o","k"]}}`
```html
<button>
  t
</button>
<p>
  c
</p>
<div>
  cl
</div>
```
## Change
```
UPDATE: p::text "b" => "c"
REMOVE: div::text("bl")
INSERT: div::text("cl")
```

# Update `{"$global":{"o":{"x":"c","y":2},"k":"l","serializedGlobals":["o","k"]}}`
