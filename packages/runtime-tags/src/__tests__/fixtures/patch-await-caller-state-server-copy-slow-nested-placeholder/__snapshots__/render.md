# Render `{"title":{},"note":{},"label":"a","promise":{}}`
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

# Update `{"title":{},"note":{"value":"n2"},"label":"b","promise":{"value":"SECRET_server"}}`
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
UPDATE: #document-fragment > h1::text "t1" => "t2"
INSERT: .swap + em
REMOVE: em + h1
REMOVE: em + p
REMOVE: em + small
```

# Update
```js
;
```

# Update `{"title":{},"note":{"value":"n2"},"label":"b","promise":{"value":"SECRET_server"}}`
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
