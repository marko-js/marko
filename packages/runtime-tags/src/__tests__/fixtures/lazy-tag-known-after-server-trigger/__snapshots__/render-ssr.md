# Render
```html
<button
  class="toggle"
>
  toggle
</button>
<span
  id="go"
>
  go
</span>
<span>
  server
</span>
```

# Update
```js
document.querySelector("#go").click();
```

# Update
```js
document.querySelector(".toggle").click();
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<span
  id="go"
>
  go
</span>
<span>
  server
</span>
<span>
  tag
</span>
```
## Change
```
INSERT: span:nth-of-type(2) + span
```
