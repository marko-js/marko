# Render `{"q":"/a?","item":"1"}`
```html
<a
  href="/a?1"
>
  x
</a>
```

# Update `{"q":"/b?","item":"2"}`
```html
<a
  href="/b?2"
>
  x
</a>
```
## Change
```
UPDATE: a[href] "/a?1" => "/b?2"
```
