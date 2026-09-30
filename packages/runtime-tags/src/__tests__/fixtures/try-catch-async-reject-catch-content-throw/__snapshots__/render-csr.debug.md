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
INSERT: button
REMOVE: button:nth-of-type(1) + span
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
INSERT: p
REMOVE: p + button
UPDATE: p::text@13 "" => "from catch"
```
