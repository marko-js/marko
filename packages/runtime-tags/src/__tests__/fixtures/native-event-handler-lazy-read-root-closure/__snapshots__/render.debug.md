# Render
```html
<button
  class="toggle"
>
  toggle
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
  class="toggle"
>
  toggle
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
  class="item"
>
  item
</button>
<div
  class="log"
>
  [1:n:u]
</div>
```
## Change
```
UPDATE: .log::text "" => "[1:n:u]"
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
  class="toggle"
>
  toggle
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
<div
  class="all"
>
  {"id":1}
</div>
<button
  class="item"
>
  item
</button>
<div
  class="log"
>
  [1:n:u]
</div>
```
## Change
```
INSERT: .copy + .all
UPDATE: .all::text " " => "{\"id\":1}"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="toggle"
>
  toggle
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
<div
  class="all"
>
  null
</div>
<button
  class="item"
>
  item
</button>
<div
  class="log"
>
  [1:n:u]
</div>
```
## Change
```
UPDATE: .all::text "{\"id\":1}" => "null"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="toggle"
>
  toggle
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
<div
  class="all"
>
  null
</div>
<button
  class="item"
>
  item
</button>
<div
  class="log"
>
  [1:n:u][undefined:n:u]
</div>
```
## Change
```
UPDATE: .log::text "[1:n:u]" => "[1:n:u][undefined:n:u]"
```
