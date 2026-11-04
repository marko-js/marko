# Render `{"$global":{"flag":true,"user":{"name":"a"},"serializedGlobals":["flag","user"]}}`
```html
<button>
  toggle
</button>
<b>
  shown
</b>
<i>
  chained
</i>
<u>
  whole
</u>
<p>
  a
</p>
```

# Update `{"$global":{"flag":false,"user":{"name":"b"},"serializedGlobals":["flag","user"]}}`
```html
<button>
  toggle
</button>
<p>
  b
</p>
```
## Change
```
REMOVE: button + b
REMOVE: button + i
UPDATE: p::text "a" => "b"
REMOVE: button + u
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
  -
</p>
```
## Change
```
UPDATE: p::text "b" => "-"
```

# Update `{"$global":{"flag":true,"user":{"name":"c"},"serializedGlobals":["flag","user"]}}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<b>
  shown
</b>
<i>
  chained
</i>
<u>
  whole
</u>
<p>
  c
</p>
```
## Change
```
INSERT: button + b
INSERT: b + i
UPDATE: p::text "-" => "c"
INSERT: i + u
```

# Update `{"$global":{"flag":false,"user":{"name":"d"},"serializedGlobals":["flag","user"]}}`
```html
<button>
  toggle
</button>
<p>
  d
</p>
```
## Change
```
REMOVE: button + b
REMOVE: button + i
UPDATE: p::text "c" => "d"
REMOVE: button + u
```
