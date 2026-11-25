# Render
```html
<button
  class="show-tag"
>
  tag
</button>
<button
  class="show-dynamic"
>
  dynamic
</button>
<span
  id="go"
>
  go
</span>
```

# Update
```js
document.querySelector(".show-tag").click();
```

# Update
```js
document.querySelector("#go").click();
```

# Update
```html
<button
  class="show-tag"
>
  tag
</button>
<button
  class="show-dynamic"
>
  dynamic
</button>
<span
  id="go"
>
  go
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
```js
document.querySelector(".show-dynamic").click();
```

# Update
```html
<button
  class="show-tag"
>
  tag
</button>
<button
  class="show-dynamic"
>
  dynamic
</button>
<span
  id="go"
>
  go
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
