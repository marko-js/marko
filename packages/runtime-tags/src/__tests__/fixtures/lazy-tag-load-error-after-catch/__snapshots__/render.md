# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="load"
>
  load
</button>
```

# Update
```js
document.querySelector("#toggle").click();
```

# Update
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="load"
>
  load
</button>
loading
```
## Change
```
INSERT: ::text("loading")
```

# Update
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="load"
>
  load
</button>
caught: rejected
```
## Change
```
REMOVE: ::text("loading")
INSERT: ::text("caught: "), ::text("rejected")
UPDATE: ::text@8 "" => "rejected"
```

# Update
```js
document.querySelector("#load").click();
```
