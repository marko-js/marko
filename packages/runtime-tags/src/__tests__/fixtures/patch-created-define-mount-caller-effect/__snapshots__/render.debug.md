# Render `{"show":false,"label":"a","page":1}`
```html
<button>
  0
</button>
<p>
  info
</p>
```
## Console
```
LOG "info" 0 1
```

# Update `{"show":true,"label":"b","page":1}`
```html
<button>
  0
</button>
<p>
  info
</p>
<p>
  info
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
```
## Console
```
LOG "info" "b" 1
```

# Update `{"show":true,"label":"b","page":2}`
## Console
```
LOG "info" 0 2
LOG "info" "b" 2
```
