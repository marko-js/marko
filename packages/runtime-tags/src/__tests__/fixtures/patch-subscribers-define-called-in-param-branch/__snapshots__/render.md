# Render `{"n":1,"x":"a","show":true}`
```html
<p>
  a 1
</p>
```
## Console
```
LOG "effect" 1 2
```

# Update `{"n":2,"x":"a","show":true}`
```html
<p>
  a 2
</p>
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```
## Console
```
LOG "effect" 2 4
```
