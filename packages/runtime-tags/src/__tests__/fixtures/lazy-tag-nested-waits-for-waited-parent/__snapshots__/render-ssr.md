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
<button
  class="press"
>
  press
</button>
<span>
  other loaded
</span>
```

# Update
```js
document.querySelector(".toggle").click();
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
document.querySelector(".press").click();
```
## Console
```
LOG "pressed"
```
