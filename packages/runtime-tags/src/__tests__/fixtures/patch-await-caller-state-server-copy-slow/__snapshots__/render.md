# Render `{"title":"t1","label":"a","promise":{}}`
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
```

# Update `{"title":"t2","label":"b","promise":{"value":"SECRET_server"}}`
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
  a:a
</p>
```
## Change
```
UPDATE: h1::text "t1" => "t2"
```

# Update
```js
;
```

# Update `{"title":"t2","label":"b","promise":{"value":"SECRET_server"}}`
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
```
## Change
```
UPDATE: p::text@0 "a" => "b"
```
