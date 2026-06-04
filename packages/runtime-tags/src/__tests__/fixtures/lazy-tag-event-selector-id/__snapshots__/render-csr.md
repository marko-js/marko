# Render `{"value":1}`
```html
<button
  id="load"
>
  load
</button>
```

# Update
```js
container.querySelector("#load").click();
```

# Update
```html
<span>
   
</span>
<button
  id="load"
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
  id="load"
>
  load
</button>
```
## Change
```
UPDATE: span::text " " => "1"
```
