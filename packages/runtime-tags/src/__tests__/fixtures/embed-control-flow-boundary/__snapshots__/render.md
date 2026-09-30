# Render
```html
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="cleanup"
>
  Cleanup
</button>
<div>
  Hello
</div>
```

# Update `click("button#toggle")`
```html
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="cleanup"
>
  Cleanup
</button>
```
## Change
```
REMOVE: #cleanup + div
```

# Update `click("button#toggle")`
```html
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="cleanup"
>
  Cleanup
</button>
<div>
  Hello
</div>
```
## Change
```
INSERT: #cleanup + div
```

# Update `click("button#toggle")`
```html
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="cleanup"
>
  Cleanup
</button>
```
## Change
```
REMOVE: #cleanup + div
```

# Update `click("button#cleanup")`
## Change
```
REMOVE: #toggle, #cleanup
```
## Console
```
LOG "cleaned up"
```
