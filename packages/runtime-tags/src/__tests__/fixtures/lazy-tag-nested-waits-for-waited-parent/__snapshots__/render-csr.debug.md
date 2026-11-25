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
<span
  id="other"
>
  other
</span>
```
## Console
```
WARN "A lazy load trigger could not find an element matching \"#go\". The module was loaded immediately."
WARN "A lazy load trigger could not find an element matching \"#other\". The module was loaded immediately."
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
<span
  id="other"
>
  other
</span>
<span>
  other loaded
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
  id="go"
>
  go
</span>
<span
  id="other"
>
  other
</span>
<button
  class="press"
>
  press
</button>
<span>
  other loaded
</span>
```
## Change
```
INSERT: .press
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
  id="go"
>
  go
</span>
<span
  id="other"
>
  other
</span>
<button
  class="press"
>
  press
</button>
<span>
  other loaded
</span>
<button
  class="press"
>
  press
</button>
```
## Change
```
INSERT: button:nth-of-type(3)
```

# Update
```js
document.querySelector("#other").click();
```

# Update
```js
document.querySelector("#go").click();
```

# Update
```js
document.querySelector(".press").click();
```
## Console
```
LOG "pressed"
```
