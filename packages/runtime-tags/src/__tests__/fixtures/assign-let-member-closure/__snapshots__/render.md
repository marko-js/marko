# Render
```html
<span>
  closed
</span>
<button
  class="open"
>
  open
</button>
<button
  class="apply"
>
  apply
</button>
```

# Update
```js
document.querySelector(".open").click();
```

# Update
```js
document.dispatchEvent(new document.defaultView.KeyboardEvent("keydown"));
```
## Console
```
LOG "key" true
```

# Update
```js
document.querySelector(".apply").click();
```
```html
<span>
  open
</span>
<button
  class="open"
>
  open
</button>
<button
  class="apply"
>
  apply
</button>
```
## Change
```
UPDATE: span::text "closed" => "open"
```

# Update
```js
document.dispatchEvent(new document.defaultView.KeyboardEvent("keydown"));
```
## Console
```
LOG "key" true
```
