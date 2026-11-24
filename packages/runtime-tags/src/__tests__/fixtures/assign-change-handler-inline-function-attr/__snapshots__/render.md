# Render
```html
<button
  class="show"
>
  show
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="first"
>
  run
</button>
<span>
  v undefined
</span>
<button
  class="last"
>
  run
</button>
<span>
  v undefined
</span>
```
## Change
```
INSERT: .show + :is(.first, span)
INSERT: span:nth-of-type(1) + :is(.last, span)
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="first"
>
  run
</button>
<span>
  first1 undefined
</span>
<button
  class="last"
>
  run
</button>
<span>
  v undefined
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@0 "v" => "first1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="first"
>
  run
</button>
<span>
  first1 undefined
</span>
<button
  class="last"
>
  run
</button>
<span>
  last2 undefined
</span>
```
## Change
```
UPDATE: span:nth-of-type(2)::text@0 "v" => "last2"
```
