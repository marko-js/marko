# Render
```html
<span>
  light
</span>
<div>
  inert
</div>
<button
  class="toggle"
>
  toggle
</button>
```

# Update
```js
container.querySelector("button.toggle").click();
```
```html
<span>
  dark
</span>
<div>
  inert
</div>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: span::text "light" => "dark"
```
