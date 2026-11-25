# Render
```html
<span>
  before
</span>
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
INSERT: button:nth-of-type(1)::text("nope")
INSERT: .toggle
INSERT: .toggle::text("true")
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
