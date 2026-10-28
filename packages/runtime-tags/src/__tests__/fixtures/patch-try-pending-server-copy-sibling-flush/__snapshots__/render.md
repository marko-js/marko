# Render `{"label":"a","promise":{},"other":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a:a
</p>
<p>
  o1
</p>
```

# Update `{"label":"b","promise":{"value":"b"},"other":{"value":"o2"}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  b:a
</p>
<p>
  o2
</p>
```
## Change
```
REMOVE: p
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(1)::text@0 "a" => "b"
```
