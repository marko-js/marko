# Render
```html
<button
  class="toggle"
>
  toggle
</button>
```

# Update
```js
Reflect.deleteProperty(document.defaultView, "requestIdleCallback");
document.querySelector(".toggle").click();
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  loaded
</span>
```
## Change
```
INSERT: span
```
