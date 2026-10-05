# Render
```html
caught S
<div
  class="wrap"
>
  <span
    class="child"
  >
    1
  </span>
</div>
```

# Update
```js
const { defaultView } = document;
document.body.dispatchEvent(new defaultView.MouseEvent("mouseover"));
```
## Console
```
LOG "loaded"
```
