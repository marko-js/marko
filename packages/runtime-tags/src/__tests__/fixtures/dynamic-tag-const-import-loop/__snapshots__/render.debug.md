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
document.querySelector("#add").click();
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
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: button:nth-of-type(2) + button
```

# Update
```js
[...document.querySelectorAll(".toggle")].at(-1).click();
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
<button
  class="toggle"
>
  toggle
</button>
item 1
```
## Change
```
INSERT: button:nth-of-type(3) + :is(::text("item "), ::text("1"))
```
