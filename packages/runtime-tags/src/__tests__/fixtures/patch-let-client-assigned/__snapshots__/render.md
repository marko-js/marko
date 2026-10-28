# Render `{"v":"a","w":"1"}`
```html
<span>
  function
</span>
<p>
  a1
</p>
<button>
  +
</button>
```

# Update `{"v":"a","w":"2"}`
```html
<span>
  function
</span>
<p>
  a2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "a1" => "a2"
```
