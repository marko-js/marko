# Render `{"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<em>
  acme
</em>
<i>
  1acme
</i>
<i>
  2acme
</i>
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<em>
  bmce
</em>
<i>
  1bmce
</i>
<i>
  2bmce
</i>
```
## Change
```
UPDATE: em::text "acme" => "bmce"
UPDATE: i:nth-of-type(1)::text@1 "acme" => "bmce"
UPDATE: i:nth-of-type(2)::text@1 "acme" => "bmce"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
```
## Change
```
REMOVE: button + em
REMOVE: button + i
REMOVE: button + i
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<em>
  bmce
</em>
<i>
  1bmce
</i>
<i>
  2bmce
</i>
```
## Change
```
INSERT: button + em
INSERT: em + i
INSERT: i:nth-of-type(1) + i
UPDATE: em::text " " => "bmce"
UPDATE: i:nth-of-type(1)::text@1 "" => "bmce"
UPDATE: i:nth-of-type(2)::text@1 "" => "bmce"
```

# Update `{"$global":{"brand":"cmce","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<em>
  cmce
</em>
<i>
  1cmce
</i>
<i>
  2cmce
</i>
```
## Change
```
UPDATE: em::text "bmce" => "cmce"
UPDATE: i:nth-of-type(1)::text@1 "bmce" => "cmce"
UPDATE: i:nth-of-type(2)::text@1 "bmce" => "cmce"
```
