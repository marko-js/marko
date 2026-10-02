# Render
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  shown
</span>
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
loading
```
## Change
```
INSERT: .toggle + ::text("loading")
REMOVE: ::text + span
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
INSERT: .toggle + :is(.counter, span)
REMOVE: span + ::text("loading")
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
REMOVE: .counter + span
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
INSERT: .counter + span
```
