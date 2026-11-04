# Render `{"show":false}`

# Update `{"show":true}`
```html
<p>
  caught
</p>
<p>
  placeholder
</p>
```
## Change
```
INSERT: p
INSERT: p:nth-of-type(1) + p
```
## Console
```
LOG "caught body setup"
LOG "placeholder body setup"
```
