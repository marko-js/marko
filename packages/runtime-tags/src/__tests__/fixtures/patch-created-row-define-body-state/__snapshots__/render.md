# Render `{"items":["a"],"value":{"value":"x"}}`
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

# Update `{"items":["a","b"],"value":{"value":"y"}}`
```html
<p>
  a:y:1
</p>
<p>
  b:y:1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "x" => "y"
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text@4 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a:y:2
</p>
<p>
  b:y:2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@4 "1" => "2"
UPDATE: p:nth-of-type(2)::text@4 "1" => "2"
```

# Update `{"items":["c"],"value":{"value":"z"}}`
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
REMOVE: p + p
INSERT: ::text("loading "), ::text("c")
REMOVE: ::text + p
INSERT: p
REMOVE: p + ::text("loading ")
REMOVE: p + ::text("c")
```
