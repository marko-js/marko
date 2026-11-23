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
INSERT: .toggle + span
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
INSERT: span:nth-of-type(1) + span
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
INSERT: span:nth-of-type(2) + span
```
