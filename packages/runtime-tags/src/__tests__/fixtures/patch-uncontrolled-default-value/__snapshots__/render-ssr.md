# Render `{"name":"a","on":true}`
```html
<input
  value="a"
/>
<textarea>
  a
</textarea>
<input
  checked=""
  type="checkbox"
/>
```

# Update `{"name":"b","on":false}`
```html
<input
  default-value="b"
  value="a"
/>
<textarea
  default-value="b"
>
  a
</textarea>
<input
  checked=""
  type="checkbox"
/>
```
## Change
```
UPDATE: input:nth-of-type(1)[value] "a" => "b"
UPDATE: input:nth-of-type(2)[checked] "" => null
REMOVE: textarea::text("a")
INSERT: textarea::text("b")
```

# Update `{"name":"c","on":true}`
```html
<input
  default-value="c"
  value="a"
/>
<textarea
  default-value="c"
>
  a
</textarea>
<input
  checked=""
  type="checkbox"
/>
```
## Change
```
UPDATE: input:nth-of-type(1)[value] "b" => "c"
UPDATE: input:nth-of-type(2)[checked] null => ""
REMOVE: textarea::text("b")
INSERT: textarea::text("c")
```
