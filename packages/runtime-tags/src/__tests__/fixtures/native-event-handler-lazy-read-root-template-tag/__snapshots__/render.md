# Render
```html
<button
  class="whole"
>
  whole
</button>
<button
  class="tag"
>
  tag
</button>
<button
  class="new"
>
  new
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
  class="whole"
>
  whole
</button>
<button
  class="tag"
>
  tag
</button>
<button
  class="new"
>
  new
</button>
<div
  class="log"
>
  a2b
</div>
```
## Change
```
UPDATE: .log::text "" => "a2b"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="whole"
>
  whole
</button>
<button
  class="tag"
>
  tag
</button>
<button
  class="new"
>
  new
</button>
<div
  class="log"
>
  2
</div>
```
## Change
```
UPDATE: .log::text "a2b" => "2"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="whole"
>
  whole
</button>
<button
  class="tag"
>
  tag
</button>
<button
  class="new"
>
  new
</button>
<div
  class="log"
>
  n,fmt,Box
</div>
```
## Change
```
UPDATE: .log::text "2" => "n,fmt,Box"
```
