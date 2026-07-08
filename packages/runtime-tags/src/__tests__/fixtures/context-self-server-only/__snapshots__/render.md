# Render `{"$global":{"label":"intro"}}`
```html
<em>
  intro
</em>
<div>
  static
</div>
<button
  class="inc"
>
  0
</button>
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<em>
  intro
</em>
<div>
  static
</div>
<button
  class="inc"
>
  1
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```
