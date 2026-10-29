# Render `{"label":"a","slow":{"value":"s1"},"failing":{"value":{}},"other":{},"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"label":"b","slow":{"value":"s2"},"failing":{},"other":{},"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`

# Update
```html
<button>
  1
</button>
<p>
  fixed
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "fixed"
```

# Update
```html
<button>
  1
</button>
<p>
  fixed
</p>
<b>
  o2
</b>
```
## Change
```
INSERT: p + b
UPDATE: b::text " " => "o2"
```

# Update
```html
<button>
  1
</button>
<p>
  acme!
</p>
<p>
  1 b
</p>
<i>
  on
</i>
<p>
  fixed
</p>
<p>
  fixed
</p>
<b>
  o2
</b>
```
## Change
```
INSERT: i + p
UPDATE: p:nth-of-type(3)::text " " => "fixed"
INSERT: button + :is(p, p)
INSERT: p:nth-of-type(2) + i
UPDATE: p:nth-of-type(2)::text " " => "1 b"
UPDATE: p:nth-of-type(1)::text " " => "acme!"
```

# Update
```html
<button>
  1
</button>
<em>
  s2
</em>
<em>
  s2
</em>
<p>
  fixed
</p>
<b>
  o2
</b>
```
## Change
```
INSERT: em:nth-of-type(1) + em
REMOVE: em:nth-of-type(2) + p
INSERT: button + em
REMOVE: em:nth-of-type(1) + p
REMOVE: em:nth-of-type(1) + p
REMOVE: em:nth-of-type(1) + i
```

# Update `{"label":"c","slow":{},"failing":{"value":{}},"other":{},"$global":{"brand":"cmce","serializedGlobals":["brand"]}}`
