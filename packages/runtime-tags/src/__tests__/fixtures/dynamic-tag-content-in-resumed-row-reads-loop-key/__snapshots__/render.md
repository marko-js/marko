# Render
```html
<button
  id="add"
>
  add
</button>
<button
  class="toggle"
>
  toggle
</button>
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  id="add"
>
  add
</button>
<button
  class="toggle"
>
  toggle
</button>
item 0
```
## Change
```
INSERT: .toggle + :is(::text("item "), ::text("0"))
```
