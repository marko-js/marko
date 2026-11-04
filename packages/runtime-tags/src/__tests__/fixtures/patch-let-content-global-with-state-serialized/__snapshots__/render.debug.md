# Render `{"$global":{"label":"a","serializedGlobals":{"label":true}}}`
```html
<button>
  +
</button>
<b>
  a0
</b>
```

# Update `{"$global":{"label":"b","serializedGlobals":{"label":true}}}`
```html
<button>
  +
</button>
<b>
  b0
</b>
```
## Change
```
UPDATE: b::text "a0" => "b0"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  +
</button>
<b>
  b1
</b>
```
## Change
```
UPDATE: b::text "b0" => "b1"
```

# Update `{"$global":{"label":"c","serializedGlobals":{"label":true}}}`
```html
<button>
  +
</button>
<b>
  c1
</b>
```
## Change
```
UPDATE: b::text "b1" => "c1"
```
