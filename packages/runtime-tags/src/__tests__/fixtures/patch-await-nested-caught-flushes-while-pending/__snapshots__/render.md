# Render `{"msg":"a","outer":{"value":"o"},"inner":{"value":{}}}`
```html
<button>
  0
</button>
<em>
  outer loading
</em>
```

# Update `{"msg":"b","outer":{"value":"o"},"inner":{"value":"i"}}`

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
```
## Change
```
INSERT: em::text("inner failed")
REMOVE: em
INSERT: #outer + em
```
