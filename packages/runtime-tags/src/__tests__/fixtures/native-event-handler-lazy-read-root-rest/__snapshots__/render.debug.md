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
  class="log"
/>
```

# Update
```js
document.querySelector(selector).click();
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
  class="log"
>
  [1:undefined:2]
</div>
```
## Change
```
UPDATE: .log::text "" => "[1:undefined:2]"
```

# Update
```js
document.querySelector(selector).click();
```

# Update
```js
document.querySelector(selector).click();
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
  class="log"
>
  [1:undefined:2][2:undefined:3]
</div>
```
## Change
```
UPDATE: .log::text "[1:undefined:2]" => "[1:undefined:2][2:undefined:3]"
```
