# Render `{"title":"Alpha","detail":"first detail","extra":"first extra","expanded":true,"$global":{"persisted":true}}`
```html
<h1>
  Alpha
</h1>
<button
  class="inc"
>
  count 0
</button>
<p
  class="detail"
>
  first detail
</p>
<span
  class="extra"
>
  first extra
</span>
```

# Update `{"title":"Beta","detail":"second detail","extra":"second extra","expanded":true,"$global":{"persisted":true}}`
```html
<h1>
  Beta
</h1>
<button
  class="inc"
>
  count 0
</button>
<p
  class="detail"
>
  second detail
</p>
<span
  class="extra"
>
  second extra
</span>
```
## Change
```
UPDATE: h1::text "Alpha" => "Beta"
UPDATE: .detail::text "first detail" => "second detail"
UPDATE: .extra::text "first extra" => "second extra"
```
