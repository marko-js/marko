# Render
```html
<span>
  light
</span>
<em>
  gold
</em>
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
<em>
  silver
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: span::text "light" => "dark"
UPDATE: em::text "gold" => "silver"
```

# Update
```js
container.querySelector("button.toggle").click();
```
```html
<span>
  light
</span>
<em>
  gold
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: span::text "dark" => "light"
UPDATE: em::text "silver" => "gold"
```
