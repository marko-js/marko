# Render `{"label":"a","promise":{"value":"client"}}`
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
<p
  title="client"
>
  a:client:CLIENT:aclient
</p>
<span>
  6
</span>
```
## Change
```
INSERT: .swap + :is(p, span)
UPDATE: p[title] null => "client"
UPDATE: p::text@2 "" => "client"
UPDATE: span::text " " => "6"
UPDATE: p::text@9 "" => "CLIENT"
UPDATE: p::text@0 "" => "a"
UPDATE: p::text@16 "" => "aclient"
```

# Update `{"label":"b","promise":{"value":"SECRET_server"}}`
```html
<button
  class="swap"
>
  swap
</button>
<p
  title="client"
>
  b:client:CLIENT:bclient
</p>
<span>
  6
</span>
```
## Change
```
UPDATE: p::text@0 "a" => "b"
UPDATE: p::text@16 "aclient" => "bclient"
```
