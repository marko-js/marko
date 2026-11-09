# Render
```html
<button
  class="show"
>
  show
</button>
<div />
```
## Console
```
LOG "{\"id\":1,\"open\":true}"
```

# Update
```js
document.querySelector(".show").click();
```
```html
<button
  class="show"
>
  show
</button>
<div>
  [1]
</div>
```
## Change
```
UPDATE: div::text "" => "[1]"
```
