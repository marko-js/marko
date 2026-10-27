# Render `{"label":"a","slow":{"value":"s1"},"failing":{},"other":{},"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<button>
  0
</button>
<p>
  acme!
</p>
<p>
  0 a
</p>
<p>
  fixed
</p>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  0
</button>
<p>
  acme!
</p>
<p>
  0 a
</p>
<p>
  fixed
</p>
<p>
  fixed
</p>
<b>
  o1
</b>
```
## Change
```
INSERT: p:nth-of-type(4)::text("fixed")
INSERT: b::text("o1")
INSERT: p:nth-of-type(3) + :is(p, b)
```

# Update
```html
<button>
  0
</button>
<em>
  s1
</em>
<em>
  s1
</em>
<p>
  fixed
</p>
<b>
  o1
</b>
```
## Change
```
INSERT: em:nth-of-type(1)::text("s1")
INSERT: em:nth-of-type(2)::text("s1")
REMOVE: t > p:nth-of-type(1) + p
REMOVE: p
INSERT: button + em
REMOVE: p
INSERT: em:nth-of-type(1) + em
```

# Update `{"label":"b","slow":{"value":"s2"},"failing":{},"other":{},"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button>
  0
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
UPDATE: em:nth-of-type(1)::text "s1" => "s2"
UPDATE: em:nth-of-type(2)::text "s1" => "s2"
UPDATE: b::text "o1" => "o2"
```

# Update `{"label":"c","slow":{},"failing":{},"other":{},"$global":{"brand":"cmce","serializedGlobals":["brand"]}}`
```html
<button>
  0
</button>
<em>
  s3
</em>
<em>
  s3
</em>
<p>
  fixed
</p>
<b>
  o3
</b>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "s2" => "s3"
UPDATE: em:nth-of-type(2)::text "s2" => "s3"
UPDATE: b::text "o2" => "o3"
```
