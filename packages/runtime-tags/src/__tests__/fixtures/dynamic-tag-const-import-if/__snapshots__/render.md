# Render
```html
<button
  id="show"
>
  show
</button>
```

# Update
```js
document.querySelector("#show").click();
```
```html
<button
  id="show"
>
  show
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: .toggle
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  id="show"
>
  show
</button>
<button
  class="toggle"
>
  toggle
</button>
shown
```
## Change
```
INSERT: ::text("shown")
```
