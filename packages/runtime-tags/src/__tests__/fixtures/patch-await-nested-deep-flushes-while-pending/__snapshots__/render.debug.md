# Render `{"msg":"a","outer":{"value":"o"},"middle":{"value":"m"},"inner":{"value":"i"}}`
```html
<button>
  0
</button>
<em>
  outer loading
</em>
```

# Update `{"msg":"b","outer":{"value":"o"},"middle":{"value":"m"},"inner":{"value":"i"}}`

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
  middle loading
</em>
```
## Change
```
INSERT: #outer::text("b")
INSERT: #outer::text@0 + ::text(" ")
INSERT: #outer::text@1 + ::text("o")
INSERT: em::text("middle loading")
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
<div
  id="middle"
>
  b m
</div>
<em>
  inner loading
</em>
```
## Change
```
INSERT: #middle::text("b")
INSERT: #middle::text@0 + ::text(" ")
INSERT: #middle::text@1 + ::text("m")
INSERT: em::text("inner loading")
REMOVE: em
INSERT: #outer + :is(#middle, em)
UPDATE: #middle::text@0 "a" => "b"
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
<div
  id="middle"
>
  b m
</div>
<div
  id="inner"
>
  b i
</div>
```
## Change
```
INSERT: #inner::text("b")
INSERT: #inner::text@0 + ::text(" ")
INSERT: #inner::text@1 + ::text("i")
REMOVE: em
INSERT: #middle + #inner
UPDATE: #inner::text@0 "a" => "b"
```
