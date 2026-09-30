# Render
```html
<div
  class="x"
>
  Body Content
</div>
<button
  class="toggle"
  type="button"
>
  toggle
</button>
<div
  class="echo"
/>
```

# Update `click("button.toggle")`
```html
<div
  class="x"
>
  Body Content
</div>
<button
  class="toggle"
  type="button"
>
  toggle
</button>
<div
  class="echo"
>
  Body Content
</div>
```
## Change
```
INSERT: .echo::text("Body Content")
```
