# Render
```html
<button
  class="toggle"
>
  toggle
</button>
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  server
</span>
```
## Change
```
INSERT: span
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
<span>
  server
</span>
<span>
  tag
</span>
```
## Change
```
INSERT: span:nth-of-type(2)
```

# Update
```html
<button
  class="toggle"
>
  toggle
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
INSERT: span:nth-of-type(3)
```
