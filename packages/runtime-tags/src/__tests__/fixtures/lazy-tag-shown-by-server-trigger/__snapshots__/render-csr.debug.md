# Render
```html
<button
  id="go"
>
  go
</button>
```
## Console
```
WARN "A lazy load trigger could not find an element matching \"#go\". The module was loaded immediately."
```

# Update
```js
document.querySelector("#go").click();
```

# Update
```html
<button
  id="go"
>
  go
</button>
<span>
  dynamic
</span>
```
## Change
```
INSERT: span
```

# Update
```html
<button
  id="go"
>
  go
</button>
<span>
  server
</span>
<span>
  tag
</span>
<span>
  dynamic
</span>
```
## Change
```
INSERT: span:nth-of-type(1)
INSERT: span:nth-of-type(2)
```
