# Render `{"msg":"a","outer":{"value":"o"},"inner":{"value":{}},"last":{}}`
```html
<button>
  0
</button>
<em>
  outer loading
</em>
<span
  id="last"
>
  a l
</span>
```

# Update `{"msg":"b","outer":{},"inner":{},"last":{"value":"l"}}`
```html
<button>
  0
</button>
<em>
  outer loading
</em>
<span
  id="last"
>
  b l
</span>
```
## Change
```
REMOVE: #last
INSERT: em + #last
```

# Update
```html
<button>
  0
</button>
<div
  id="outer"
>
  b o
</div>
<em>
  inner loading
</em>
<span
  id="last"
>
  b l
</span>
```
## Change
```
INSERT: #outer::text("b")
INSERT: #outer::text@0 + ::text(" ")
INSERT: #outer::text@1 + ::text("o")
INSERT: em::text("inner loading")
REMOVE: em
INSERT: button + :is(#outer, em)
UPDATE: #outer::text@0 "a" => "b"
```

# Update
```html
<button>
  0
</button>
<div
  id="outer"
>
  b o
</div>
<em>
  inner failed
</em>
<span
  id="last"
>
  b l
</span>
```
## Change
```
INSERT: em::text("inner failed")
REMOVE: em
INSERT: #outer + em
```
