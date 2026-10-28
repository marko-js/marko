# Render `{"v":"a","items":[1]}`
```html
<p
  class="a"
>
  1
</p>
```

# Update `{"v":"a","items":[1,2]}`
```html
<p
  class="a"
>
  1
</p>
<p
  class="a"
>
  2
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)[class] null => "a"
```
