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
<button
  class="both"
>
  both
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
<button
  class="both"
>
  both
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
<button
  class="both"
>
  both
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
<button
  class="both"
>
  both
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
<button
  class="both"
>
  both
</button>
<div
  class="a"
>
  2
</div>
<div
  class="log"
>
  {"a":2,"b":3}:undefined:{"b":3}
</div>
```
## Change
```
UPDATE: .log::text "{\"b\":3}" => "{\"a\":2,\"b\":3}:undefined:{\"b\":3}"
```
