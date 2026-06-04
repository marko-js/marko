# Render `{"value":1}`
```html
<button
  class="load"
>
  load
</button>
```

# Update
```js
container.querySelector(".load").click();
```

# Update
```html
<span>
   
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
UPDATE: span::text " " => "1"
```
