# Render
```html
<button
  class="load"
>
  load
</button>
<button
  class="call"
>
  call
</button>
```
## Console
```
WARN "A lazy load trigger could not find an element matching \".load\". The module was loaded immediately."
```

# Update
```js
document.querySelector(".load").click();
```

# Update
```html
<button
  class="load"
>
  load
</button>
<p>
  child
</p>
<button
  class="call"
>
  call
</button>
```
## Change
```
INSERT: .load + p
```

# Update
```js
document.querySelector(".call").click();
```
## Console
```
LOG "called"
LOG "called"
```
