# Render
```html
<button
  class="change"
>
  change
</button>
```

# Update
```html
loading
<button
  class="change"
>
  change
</button>
```
## Change
```
INSERT: ::text("loading")
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
INSERT: .display
REMOVE: .display + ::text("loading")
UPDATE: .display::text " " => "light"
```

# Update
```js
container.querySelector("button.change").click();
```
```html
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
