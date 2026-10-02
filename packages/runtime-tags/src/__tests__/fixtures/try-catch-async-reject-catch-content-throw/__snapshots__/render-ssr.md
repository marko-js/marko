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
INSERT: button
INSERT: button:nth-of-type(1)::text("nope")
INSERT: button:nth-of-type(1) + .toggle
INSERT: .toggle::text("true")
REMOVE: span
```

# Update
```js
document.querySelector("button:not(.toggle)").click();
```
```html
<button>
  from catch
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
REMOVE: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(1)::text " " => "from catch"
```
