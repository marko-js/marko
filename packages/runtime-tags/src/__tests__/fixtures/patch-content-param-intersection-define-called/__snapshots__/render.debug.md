# Render `{"a":"a1","x":"x1"}`
```html
<p>
  a10
</p>
<p>
  a1x1
</p>
<button>
  inc
</button>
```

# Update `{"a":"a2","x":"x2"}`
```html
<p>
  a20
</p>
<p>
  a2x2
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "a1x1" => "a2x2"
UPDATE: p:nth-of-type(1)::text "a10" => "a20"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a21
</p>
<p>
  a2x2
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "a20" => "a21"
```

# Update `{"a":"a3","x":"x3"}`
```html
<p>
  a31
</p>
<p>
  a3x3
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "a2x2" => "a3x3"
UPDATE: p:nth-of-type(1)::text "a21" => "a31"
```
