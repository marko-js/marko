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

# Update
```js
document.querySelector("button#toggle").click();
```
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

# Update
```js
document.querySelector("button#toggle").click();
```
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

# Update
```js
document.querySelector("button#toggle").click();
```
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

# Update
```js
document.querySelector("button#cleanup").click();
```
## Change
```
REMOVE: #toggle, #cleanup
```
## Console
```
LOG "cleaned up"
```
