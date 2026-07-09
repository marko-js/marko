# Render
```html
loading
<button
  class="change"
>
  change
</button>
```

# Update
```html
<span
  class="display"
>
  light
</span>
<button
  class="change"
>
  change
</button>
```
## Change
```
INSERT: .display::text("light")
REMOVE: ::text("loading")
INSERT: .display
```

# Update
```js
container.querySelector("button.change").click();
```
