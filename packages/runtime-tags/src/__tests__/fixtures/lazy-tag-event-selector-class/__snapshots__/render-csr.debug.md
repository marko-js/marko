# Render `{"value":1}`
```html
<button
  class="load"
>
  load
</button>
```
## Console
```
WARN "A lazy load trigger could not find an element matching \".load\". The module was loaded immediately."
```

# Update
```js
container.querySelector(".load").click();
```

# Update
```html
<span>
  1
</span>
<button
  class="load"
>
  load
</button>
```
## Change
```
INSERT: span
```
## Console
```
LOG "loaded"
```
