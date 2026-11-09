# Render
```html
<button
  class="whole"
>
  whole
</button>
<button
  class="mid"
>
  mid
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
  class="mid"
>
  mid
</button>
<div
  class="log"
>
  1:1
</div>
```
## Change
```
UPDATE: .log::text "" => "1:1"
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
  class="mid"
>
  mid
</button>
<div
  class="log"
>
  n,get
</div>
```
## Change
```
UPDATE: .log::text "1:1" => "n,get"
```
