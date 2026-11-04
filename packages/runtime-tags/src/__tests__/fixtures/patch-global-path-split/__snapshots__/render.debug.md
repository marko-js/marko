# Render `{"$global":{"o":{"x":"a","y":1},"serializedGlobals":["o"]}}`
```html
<div>
  a
</div>
<div>
  {"x":"a","y":1}
</div>
<div>
  a{"x":"a","y":1}
</div>
```

# Update `{"$global":{"o":{"x":"a","y":2},"serializedGlobals":["o"]}}`
```html
<div>
  a
</div>
<div>
  {"x":"a","y":2}
</div>
<div>
  a{"x":"a","y":2}
</div>
```
## Change
```
REMOVE: div:nth-of-type(3)::text("a{\"x\":\"a\",\"y\":1}")
INSERT: div:nth-of-type(3)::text("a{\"x\":\"a\",\"y\":2}")
REMOVE: div:nth-of-type(2)::text("{\"x\":\"a\",\"y\":1}")
INSERT: div:nth-of-type(2)::text("{\"x\":\"a\",\"y\":2}")
```
