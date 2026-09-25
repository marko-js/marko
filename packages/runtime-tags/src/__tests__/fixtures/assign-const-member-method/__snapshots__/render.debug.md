# Render
```html
<button
  class="show"
>
  show
</button>
<button
  class="call"
>
  call
</button>
<span>
  none
</span>
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
<button
  class="call"
>
  call
</button>
<span>
  revealed 1
</span>
```
## Change
```
UPDATE: span::text "none" => "revealed 1"
```

# Update
```js
document.querySelector(".call").click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="call"
>
  call
</button>
<span>
  revealed 2
</span>
```
## Change
```
UPDATE: span::text "revealed 1" => "revealed 2"
```
