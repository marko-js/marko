# Render
```html
<span>
  live closed
</span>
<button
  class="open"
>
  open
</button>
<button
  class="read"
>
  read
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
document.querySelector(".read").click();
```
## Console
```
LOG "read" true
```

# Update
```js
document.querySelector(".apply").click();
```
```html
<span>
  live open
</span>
<button
  class="open"
>
  open
</button>
<button
  class="read"
>
  read
</button>
<button
  class="apply"
>
  apply
</button>
```
## Change
```
UPDATE: span::text@5 "closed" => "open"
```
