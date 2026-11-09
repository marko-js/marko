# Render
```html
<button
  class="view"
>
  view
</button>
<div
  class="view-log"
/>
<button
  class="box"
>
  box
</button>
<div
  class="box-log"
/>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="view"
>
  view
</button>
<div
  class="view-log"
>
  [1]
</div>
<button
  class="box"
>
  box
</button>
<div
  class="box-log"
/>
```
## Change
```
UPDATE: .view-log::text "" => "[1]"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="view"
>
  view
</button>
<div
  class="view-log"
>
  [1]
</div>
<button
  class="box"
>
  box
</button>
<div
  class="box-log"
>
  [2]
</div>
```
## Change
```
UPDATE: .box-log::text "" => "[2]"
```
