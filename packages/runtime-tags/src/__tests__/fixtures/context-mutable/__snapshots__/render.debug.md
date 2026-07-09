# Render
```html
<span>
  light
</span>
<div>
  static
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
  static
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

# Update
```js
container.querySelector("button.toggle").click();
```
```html
<span>
  light
</span>
<div>
  static
</div>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: span::text "dark" => "light"
```
