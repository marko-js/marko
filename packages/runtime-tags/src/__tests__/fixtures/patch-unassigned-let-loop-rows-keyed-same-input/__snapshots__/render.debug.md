# Render `{"v":"a","items":[1]}`
```html
<p>
  a1
</p>
```

# Update `{"v":"a","items":[1,2]}`
```html
<p>
  a1
</p>
<p>
  a2
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text@0 "" => "a"
```
