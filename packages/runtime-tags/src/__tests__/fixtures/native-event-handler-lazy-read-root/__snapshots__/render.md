# Render
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="show"
>
  show
</button>
<div
  class="label"
>
  m
</div>
<div
  class="log"
/>
```

# Update
```js
document.querySelector(".show").click();
```
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="show"
>
  show
</button>
<div
  class="label"
>
  m
</div>
<div
  class="log"
>
  [1:a:x:{"label":"m"}]
</div>
```
## Change
```
UPDATE: .log::text "" => "[1:a:x:{\"label\":\"m\"}]"
```

# Update
```js
document.querySelector(".bump").click();
```

# Update
```js
document.querySelector(".show").click();
```
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="show"
>
  show
</button>
<div
  class="label"
>
  m
</div>
<div
  class="log"
>
  [1:a:x:{"label":"m"}][2:a!:x:{"label":"m"}]
</div>
```
## Change
```
UPDATE: .log::text "[1:a:x:{\"label\":\"m\"}]" => "[1:a:x:{\"label\":\"m\"}][2:a!:x:{\"label\":\"m\"}]"
```
