# Render
```html
<button
  class="whole"
>
  whole
</button>
<button
  class="clear"
>
  clear
</button>
<button
  class="copy"
>
  copy
</button>
<button
  class="shown"
>
  shown
</button>
<button
  class="item"
>
  item
</button>
<div
  class="log"
/>
```
## Console
```
LOG "n u"
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
  class="clear"
>
  clear
</button>
<button
  class="copy"
>
  copy
</button>
<button
  class="shown"
>
  shown
</button>
<button
  class="item"
>
  item
</button>
<div
  class="log"
>
  [1:n:u:u]
</div>
```
## Change
```
UPDATE: .log::text "" => "[1:n:u:u]"
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
  class="whole"
>
  whole
</button>
<button
  class="clear"
>
  clear
</button>
<button
  class="copy"
>
  copy
</button>
<button
  class="shown"
>
  shown
</button>
<button
  class="item"
>
  item
</button>
<div
  class="log"
>
  [1:n:u:u]{"id":1}
</div>
```
## Change
```
UPDATE: .log::text "[1:n:u:u]" => "[1:n:u:u]{\"id\":1}"
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
  class="whole"
>
  whole
</button>
<button
  class="clear"
>
  clear
</button>
<button
  class="copy"
>
  copy
</button>
<button
  class="shown"
>
  shown
</button>
<button
  class="item"
>
  item
</button>
<div
  class="log"
>
  [1:n:u:u]{"id":1}[undefined:n:u:u]
</div>
```
## Change
```
UPDATE: .log::text "[1:n:u:u]{\"id\":1}" => "[1:n:u:u]{\"id\":1}[undefined:n:u:u]"
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
  class="clear"
>
  clear
</button>
<button
  class="copy"
>
  copy
</button>
<button
  class="shown"
>
  shown
</button>
<button
  class="item"
>
  item
</button>
<div
  class="log"
>
  [1:n:u:u]{"id":1}[undefined:n:u:u](u)
</div>
```
## Change
```
UPDATE: .log::text "[1:n:u:u]{\"id\":1}[undefined:n:u:u]" => "[1:n:u:u]{\"id\":1}[undefined:n:u:u](u)"
```
