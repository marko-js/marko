# Render
```html
<span>
  before
</span>
<button
  class="toggle"
>
  true
</button>
```

# Update
```html
<button>
  nope
</button>
<button
  class="toggle"
>
  true
</button>
```
## Change
```
REMOVE: span
INSERT: button:nth-of-type(1)
UPDATE: button:nth-of-type(1)::text " " => "nope"
```

# Update
```js
document.querySelector("button:not(.toggle)").click();
```
```html
<p>
  outer caught from catch
</p>
<button
  class="toggle"
>
  true
</button>
```
## Change
```
REMOVE: button
INSERT: p
UPDATE: p::text@13 "" => "from catch"
```
