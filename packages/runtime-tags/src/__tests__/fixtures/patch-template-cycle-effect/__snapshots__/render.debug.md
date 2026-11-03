# Render `{"n":0}`
```html
<span>
  a0
</span>
```
## Console
```
LOG "a setup"
```

# Update `{"n":2}`
```html
<span>
  a2
</span>
<span>
  a1
</span>
<span>
  a0
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@1 "0" => "2"
INSERT: span:nth-of-type(1) + :is(span, span)
```
## Console
```
LOG "a setup"
LOG "a setup"
```
