# Render
```html
<button
  class="toggle"
>
  toggle
</button>
loading
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="counter"
>
  0
</button>
<span>
  shown
</span>
```
## Change
```
REMOVE: ::text("loading")
INSERT: .counter, span
INSERT: .counter::text("0")
```

# Update
```js
document.querySelector(".counter").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="counter"
>
  1
</button>
<span>
  shown
</span>
```
## Change
```
UPDATE: .counter::text "0" => "1"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="counter"
>
  1
</button>
```
## Change
```
REMOVE: span
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="counter"
>
  1
</button>
<span>
  shown
</span>
```
## Change
```
INSERT: span
```
