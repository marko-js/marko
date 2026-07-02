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
  class="n"
>
  0
</div>
<div
  class="log"
/>
```

# Update
```js
c.querySelector(".bump").click();
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
  class="n"
>
  1
</div>
<div
  class="log"
/>
```
## Change
```
UPDATE: .n::text "0" => "1"
```

# Update
```js
c.querySelector(".show").click();
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
  class="n"
>
  1
</div>
<div
  class="log"
>
  [1:x]
</div>
```
## Change
```
UPDATE: .log::text "" => "[1:x]"
```
