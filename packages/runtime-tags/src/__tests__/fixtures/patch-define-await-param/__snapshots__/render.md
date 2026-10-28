# Render `{"id":"a","value":{"value":"x"}}`
```html
loading a
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<p>
  a:x:1
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p::text("a")
INSERT: p::text@0 + ::text(":")
INSERT: p::text@1 + ::text("x")
INSERT: p::text@2 + ::text(":")
INSERT: p::text@3 + ::text("1")
REMOVE: t::text@0 + ::text("a")
REMOVE: ::text("loading ")
INSERT: p
UPDATE: p::text@4 "0" => "1"
```

# Update `{"id":"b","value":{"value":"y"}}`
```html
<p>
  b:y:1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text@0 "a" => "b"
UPDATE: p::text@2 "x" => "y"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  b:y:2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text@4 "1" => "2"
```

# Update `{"id":"c","value":{}}`
```html
<p>
  c:z:2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text@0 "b" => "c"
UPDATE: p::text@2 "y" => "z"
```
