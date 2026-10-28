# Render `{"title":{},"note":{},"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<h1>
  t1
</h1>
<small>
  n1
</small>
```
## Change
```
INSERT: .swap + h1
UPDATE: h1::text " " => "t1"
INSERT: h1 + small
UPDATE: small::text " " => "n1"
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<h1>
  t1
</h1>
<p>
  a:a
</p>
<small>
  n1
</small>
```
## Change
```
INSERT: h1 + p
UPDATE: p::text@2 "" => "a"
UPDATE: p::text@0 "" => "a"
```

# Update `{"title":{},"note":{"value":"n2"},"label":"b","promise":{"value":"SECRET_server"}}`

# Update
```html
<button
  class="swap"
>
  swap
</button>
<h1>
  t2
</h1>
<p>
  b:a
</p>
<small>
  n1
</small>
```
## Change
```
UPDATE: h1::text "t1" => "t2"
UPDATE: p::text@0 "a" => "b"
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<em>
  outer
</em>
```
## Change
```
INSERT: .swap + em
REMOVE: em + h1
REMOVE: em + p
REMOVE: em + small
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<h1>
  t2
</h1>
<p>
  b:a
</p>
<small>
  n2
</small>
```
## Change
```
INSERT: .swap + :is(h1, p, small)
REMOVE: small + em
```
