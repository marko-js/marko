# Render `{"show":false,"name":"a"}`

# Update `{"show":true,"name":"b"}`
```html
<!--hello-->
<p>
  b
</p>
```
## Change
```
INSERT: #comment
INSERT: #comment + p
```
## Console
```
LOG "comment" "hello"
```
