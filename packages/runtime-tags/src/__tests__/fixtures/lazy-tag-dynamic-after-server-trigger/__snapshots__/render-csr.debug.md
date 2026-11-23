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
## Change
```
INSERT: #go + span
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
  dynamic
</span>
```
## Change
```
INSERT: span:nth-of-type(2) + span
```
