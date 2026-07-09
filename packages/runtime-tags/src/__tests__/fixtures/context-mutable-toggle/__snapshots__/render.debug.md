# Render
```html
<button
  class="show"
>
  show
</button>
<button
  class="change"
>
  change
</button>
```

# Update
```js
container.querySelector("button.show").click();
```
```html
<button
  class="show"
>
  show
</button>
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
INSERT: .show + .display
UPDATE: .display::text " " => "light"
```

# Update
```js
container.querySelector("button.change").click();
```
```html
<button
  class="show"
>
  show
</button>
<span
  class="display"
>
  dark
</span>
<button
  class="change"
>
  change
</button>
```
## Change
```
UPDATE: .display::text "light" => "dark"
```
