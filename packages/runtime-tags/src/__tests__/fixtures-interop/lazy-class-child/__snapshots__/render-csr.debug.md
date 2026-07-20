# Render
```html
<button
  id="toggle"
>
  toggle
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
<span
  id="child"
>
  42
</span>
```
## Change
```
INSERT: #toggle + #child
INSERT: #child::text("42")
```
## Console
```
LOG "loaded"
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #toggle + #child
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<span
  id="child"
>
  42
</span>
```
## Change
```
INSERT: #toggle + #child
INSERT: #child::text("42")
```
## Console
```
LOG "loaded"
```
