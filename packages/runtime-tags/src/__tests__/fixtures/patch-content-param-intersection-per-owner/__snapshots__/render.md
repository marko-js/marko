# Render `{"a":"a1","x":"x1"}`
```html
<p>
  c1x1
</p>
<p>
  a1x1
</p>
<button>
  go
</button>
```

# Update `{"a":"a2","x":"x2"}`
```html
<p>
  c1x2
</p>
<p>
  a2x2
</p>
<button>
  go
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "a1x1" => "a2x2"
UPDATE: p:nth-of-type(1)::text "c1x1" => "c1x2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  c2x2
</p>
<p>
  a2x2
</p>
<button>
  go
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "c1x2" => "c2x2"
```

# Update `{"a":"a3","x":"x3"}`
```html
<p>
  c2x3
</p>
<p>
  a3x3
</p>
<button>
  go
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "a2x2" => "a3x3"
UPDATE: p:nth-of-type(1)::text "c2x2" => "c2x3"
```
