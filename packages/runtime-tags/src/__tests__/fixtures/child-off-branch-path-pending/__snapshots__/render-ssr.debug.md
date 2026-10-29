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
