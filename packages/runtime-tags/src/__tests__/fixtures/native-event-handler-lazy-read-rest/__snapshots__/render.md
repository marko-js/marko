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
  class="a"
>
  1
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
  class="a"
>
  1
</div>
<div
  class="log"
>
  {"b":2}
</div>
```
## Change
```
UPDATE: .log::text "" => "{\"b\":2}"
```

# Update
```js
document.querySelector(".bump").click();
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
  class="a"
>
  2
</div>
<div
  class="log"
>
  {"b":2}
</div>
```
## Change
```
UPDATE: .a::text "1" => "2"
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
  class="a"
>
  2
</div>
<div
  class="log"
>
  {"b":3}
</div>
```
## Change
```
UPDATE: .log::text "{\"b\":2}" => "{\"b\":3}"
```
