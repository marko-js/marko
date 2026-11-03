# Render `{"$global":{"x":"a","serializedGlobals":["x"]}}`
```html
<button>
  t
</button>
```

# Update
```js
d.querySelector("button").click();
```
```html
<p>
  a
</p>
<button>
  t
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "a"
```

# Update `{"$global":{"x":"b","serializedGlobals":["x"]}}`
```html
<p>
  b
</p>
<button>
  t
</button>
```
## Change
```
UPDATE: p::text "a" => "b"
```

# Update `{"$global":{"x":"c","serializedGlobals":["x"]}}`
```html
<p>
  c
</p>
<button>
  t
</button>
```
## Change
```
UPDATE: p::text "b" => "c"
```
