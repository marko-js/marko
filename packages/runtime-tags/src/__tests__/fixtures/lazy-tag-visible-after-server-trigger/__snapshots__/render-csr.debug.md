# Render
```html
<button
  class="toggle"
>
  toggle
</button>
<span
  id="target"
>
  target
</span>
```
## Console
```
WARN "A lazy load trigger could not find an element matching \"#target\". The module was loaded immediately."
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<span
  id="target"
>
  target
</span>
<span>
  server
</span>
```
## Change
```
INSERT: span:nth-of-type(2)
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<span
  id="target"
>
  target
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
INSERT: span:nth-of-type(3)
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<span
  id="target"
>
  target
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
INSERT: span:nth-of-type(4)
```
