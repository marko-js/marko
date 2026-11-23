# Render
```html
<button
  id="go"
>
  go
</button>
<span>
  server
</span>
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
  server
</span>
<span>
  tag
</span>
<span>
  other
</span>
```
## Change
```
INSERT: span:nth-of-type(1) + span
INSERT: span:nth-of-type(2) + span
```
