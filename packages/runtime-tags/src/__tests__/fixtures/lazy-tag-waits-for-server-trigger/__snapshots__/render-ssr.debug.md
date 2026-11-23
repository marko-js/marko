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
document.querySelector(".toggle").click();
```

# Update
```js
document.querySelector("#go").click();
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
<span>
  dynamic
</span>
```
## Change
```
INSERT: span:nth-of-type(2) + span
INSERT: span:nth-of-type(3) + span
```
